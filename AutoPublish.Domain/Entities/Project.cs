namespace AutoPublish.Domain.Entities
{
    public class Project : Entity<int>
    {
        public required string Name { get; set; }

        public required string GITPath { get; set; }

        public DateTime? CreatedAt { get; set; }
    }
}
