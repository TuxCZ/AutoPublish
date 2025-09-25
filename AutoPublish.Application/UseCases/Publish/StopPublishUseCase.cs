using AutoPublish.Application.Interfaces.Repositories;
using AutoPublish.Application.Orchestration;

namespace AutoPublish.Application.UseCases.Publish
{
    public class StopPublishUseCase(IProjectRepository projectRepository, PublishWorkflowOrchestrator orchestrator)
    {
        public async Task ExecuteAsync(int projectId, long jobId)
        {
            var project = await projectRepository.GetByIdAsync(projectId);
            if (project == null) throw new Exception("Project not found");

            await orchestrator.StopPublishAsync(jobId);
        }
    }
}
