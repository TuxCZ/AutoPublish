using AutoPublish.Domain.Entities;

namespace AutoPublish.Application.Interfaces.Repositories
{
    public interface IJobRepository
    {
        Task<Job?> GetActiveJobAsync();
        Task<List<Job>> GetJobQueueAsync(int recordLimit);
    }
}
