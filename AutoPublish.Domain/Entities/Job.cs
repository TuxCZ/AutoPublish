using AutoPublish.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoPublish.Domain.Entities
{
    public class Job : Entity<long>
    {
        public int ProjectId { get; set; }

        public JobAction Action { get; set; } = JobAction.Publish;
        public JobStatus Status { get; set; } = JobStatus.None;

        [NotMapped]
        public List<JobStep> Steps { get; set; } = [];

        public DateTime? CreatedAt { get; set; }
    }
}
