using AutoPublish.Application.Interfaces.Jobs;
using AutoPublish.Domain.Entities;
using AutoPublish.Domain.Enums;
using Microsoft.Extensions.Hosting;

namespace AutoPublish.Infrastructure.Background
{
    public class JobWorker(IJobQueue queue, ProcessRunner runner) : BackgroundService
    {
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                Job job = await queue.DequeueAsync(stoppingToken);
                job.Status = JobStatus.Running;

                try
                {
                    /*var exitCode = await runner.RunProcessAsync(file, args, job.JobId, 0,
                        msg => SaveLogToDb(job.JobId, name, msg),
                        stoppingToken);

                    if (exitCode != 0)
                    {
                        job.Status = JobStatus.Failed;
                        break;
                    }*/
                }
                catch (Exception ex)
                {
                    job.Status = JobStatus.Failed;
                }

                if (job.Status != JobStatus.Failed)
                    job.Status = JobStatus.Success;

                // záznam do DB 
            }
        }
    }
}
