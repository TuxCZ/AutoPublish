using AutoPublish.Application.Interfaces.Repositories;
using AutoPublish.Domain.Entities;
using AutoPublish.Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace AutoPublish.Infrastructure.Persistence.Repositories
{
    public class JobRepository(AutoPublishDbContext context) : IJobRepository
    {
        public async Task<Job?> GetActiveJobAsync()
        {
            return await context.Jobs.FirstOrDefaultAsync(job => job.Status == JobStatus.Running);
        }

        public async Task<List<Job>> GetJobQueueAsync(int recordLimit)
        {
            return await context.Jobs
                .Where(job => job.Status != JobStatus.Running)
                .OrderByDescending(job => job.CreatedAt)
                .Take(recordLimit)
                .ToListAsync();
        }


    }
}
