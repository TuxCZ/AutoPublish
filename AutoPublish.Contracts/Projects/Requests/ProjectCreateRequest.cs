using System.ComponentModel.DataAnnotations;

namespace AutoPublish.Contracts.Projects.Requests
{
    public class ProjectCreateRequest
    {
        [MinLength(2)]
        public required string Name { get; set; }

        [Url]
        public required string GitPath { get; set; }
        public required string GitBranch { get; set; }

        public string? TypescriptProjectPath { get; set; }
    }
}
