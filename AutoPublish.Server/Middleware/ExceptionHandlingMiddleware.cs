using AutoPublish.Domain.Exceptions;
using System.Text.Json;

namespace AutoPublish.Server.Middleware
{
    public class ExceptionHandlingMiddleware(RequestDelegate next)
    {
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (BaseAppException ex)
            {
                await HandleException(context, ex, ex.ErrorCode?.ToString() ?? string.Empty, ex.ErrorString ?? string.Empty, 400);
            }
            catch (Exception ex)
            {
                await HandleException(context, ex, "UNEXPECTED_ERROR", "", 500);
            }
        }

        private static async Task HandleException(HttpContext context, Exception ex, string errorCode, string errorString, int statusCode)
        {
            var result = SerializeMessage(errorCode, errorString, ex.Message);

            await UpdateResponse(context, statusCode, result);
        }

        private static async Task UpdateResponse(HttpContext context, int statusCode, string response)
        {
            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json";

            await context.Response.WriteAsync(response);
        }

        private static string SerializeMessage(string errorCode, string errorString, string message)
        {
            return JsonSerializer.Serialize(new { errorCode, errorString, message });
        }
    }
}
