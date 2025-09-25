using AutoPublish.Application.UseCases.Publish;
using AutoPublish.Contracts.Jobs.Requests;
using Microsoft.AspNetCore.Mvc;

namespace AutoPublish.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublishController(StartPublishUseCase startPublishUseCase,
        StopPublishUseCase stopPublishUseCase) : ControllerBase
    {
        [HttpPost("start")]
        public async Task Start(StartPublishRequest request)
        {
            await startPublishUseCase.ExecuteAsync(request.ProjectId);
        }

        [HttpPost("stop")]
        public async Task Stop(StopPublishRequest request)
        {
            await stopPublishUseCase.ExecuteAsync(request.ProjectId, request.JobId);
        }
    }
}
