using AutoPublish.Application.UseCases.Dashboard;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AutoPublish.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController(GetDashboardUseCase getDashboardUseCase) : ControllerBase
    {
    }
}
