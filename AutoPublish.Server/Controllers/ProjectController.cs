using AutoPublish.Contracts.Projects.Requests;
using Microsoft.AspNetCore.Mvc;

namespace AutoPublish.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        [HttpPost("create")]
        public void Create([FromBody] ProjectCreateRequest request)
        {

        }
    }
}
