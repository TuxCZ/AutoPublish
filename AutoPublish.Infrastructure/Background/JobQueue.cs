using AutoPublish.Application.Interfaces.Jobs;
using AutoPublish.Domain.Entities;
using System.Threading.Channels;

namespace AutoPublish.Infrastructure.Background
{
    public class JobQueue : IJobQueue
    {
        private readonly Channel<Job> _queue = Channel.CreateUnbounded<Job>();

        public async ValueTask QueueJobAsync(Job job)
            => await _queue.Writer.WriteAsync(job);

  
        public List<Job> GetCurrentJobsByPredicate(Func<Job, bool> predicate)
        {
            return [.. DequeueCurrentJobs().Where(predicate)];
        }

        public Job? GetCurrentJobByPredicate(Func<Job, bool> predicate)
        {
            return DequeueCurrentJobs().FirstOrDefault(predicate);
        }

        public List<Job> DequeueCurrentJobs()
        {
            var jobs = new List<Job>();

            while (_queue.Reader.TryRead(out var job))
            {
                jobs.Add(job);
            }

            return jobs;
        }

        public async ValueTask<Job> DequeueAsync(CancellationToken ct)
            => await _queue.Reader.ReadAsync(ct);
    }
}
