using AutoPublish.Domain.Entities;
using AutoPublish.Domain.Enums;

namespace AutoPublish.Application.Orchestration
{
    public class DependencyResolver
    {
        public List<JobStep> ResolveSteps(Project project, JobAction jobAction)
        {
            return jobAction switch
            {
                JobAction.Initialize => GetInitializationSteps(project),
                JobAction.Publish => GetPublishSteps(project),
                JobAction.Remove => GetRemoveSteps(project),
                _ => [],
            };
        }

        private List<JobStep> GetInitializationSteps(Project project)
        {
            var steps = new List<JobStep>
            {
                new("GitPull")
            };

            return steps;
        }

        private List<JobStep> GetPublishSteps(Project project)
        {
            var steps = new List<JobStep>();
            steps.Add(new JobStep("GitPull"));
            steps.Add(new JobStep("BuildDependentProjects"));
            steps.Add(new JobStep("NodeModulesClean"));
            steps.Add(new JobStep("NodeModulesInstall"));
            steps.Add(new JobStep("Publish"));

            return steps;
        }

        private List<JobStep> GetRemoveSteps(Project project)
        {
            var steps = new List<JobStep>
            {
                new("Delete")
            };

            return steps;
        }
    }
}
