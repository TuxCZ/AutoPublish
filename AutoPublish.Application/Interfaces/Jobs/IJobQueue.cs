using AutoPublish.Domain.Entities;

namespace AutoPublish.Application.Interfaces.Jobs
{
    public interface IJobQueue
    {
        ValueTask QueueJobAsync(Job job);
        Job? GetCurrentJobByPredicate(Func<Job, bool> predicate);
        List<Job> GetCurrentJobsByPredicate(Func<Job, bool> predicate);
        ValueTask<Job> DequeueAsync(CancellationToken ct);
    }
}
