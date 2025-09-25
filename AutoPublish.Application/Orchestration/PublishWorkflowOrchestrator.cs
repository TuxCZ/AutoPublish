using AutoPublish.Application.Interfaces.Jobs;
using AutoPublish.Domain.Entities;
using AutoPublish.Domain.Enums;

namespace AutoPublish.Application.Orchestration
{
    public class PublishWorkflowOrchestrator(IJobQueue jobQueue, DependencyResolver resolver)
    {
        public async Task StartPublishAsync(Project project)
        {
            var steps = resolver.ResolveSteps(project, JobAction.Publish);

            var job = new Job
            {
                ProjectId = project.Id,
                Action = JobAction.Publish,
                Status = JobStatus.Pending,
                Steps = steps,
                CreatedAt = DateTime.UtcNow,
            };

            await jobQueue.QueueJobAsync(job);
        }

        public async Task StopPublishAsync(long jobId)
        {
            Job? runningJob = jobQueue.GetCurrentJobByPredicate(j => j.Id == jobId);

            if (runningJob != null)
                await CancelPublishAsync(runningJob);
        }

        private async Task CancelPublishAsync(Job job)
        {
            job.Status = JobStatus.Canceled;
            //Todo: database update
        }
    }
}
