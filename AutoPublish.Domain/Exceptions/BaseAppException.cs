using AutoPublish.Common.Extensions;

namespace AutoPublish.Domain.Exceptions
{
    public class BaseAppException : Exception
    {
        public Enum? ErrorCode { get; private set; }
        public string? ErrorString => ErrorCode?.GetDescription();

        public BaseAppException(string message) : base(message) { }

        public BaseAppException(Enum errorCode, string? message = null) : base(message ?? errorCode.ToString()) 
        { 
            ErrorCode = errorCode;
        }
    }
}
