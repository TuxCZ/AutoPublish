namespace AutoPublish.Domain.Entities
{
    public class ProjectDependency : Entity<int>
    {
        public required int ProjectId { get; set; }

        public required int DependentProjectId { get; set; }
        public required string DependentProjectBranch {  get; set; }
        public string? DependentProjectSourcePath { get; set; }
        public string? DependentProjectTargetPath { get; set; }
    }
}
