using AutoPublish.Application.Interfaces.Repositories;
using AutoPublish.Contracts.Dashboard.Responses;

namespace AutoPublish.Application.UseCases.Dashboard
{
    public class GetDashboardUseCase(IJobRepository jobRepository)
    {
        public async Task<GetDashboardResponse> ExecuteAsync()
        {
            var activeJob = await jobRepository.GetActiveJobAsync();
            var jobQueue = await jobRepository.GetJobQueueAsync(4);

            return new GetDashboardResponse()
            {
                ActiveJob = activeJob,
                JobQueue = jobQueue,
                Statistics = new([], [])
            };
        }
    }
}
