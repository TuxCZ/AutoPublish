namespace AutoPublish.Contracts.Jobs.Requests
{
    public class StopPublishRequest
    {
        public required int ProjectId { get; set; }
        public required long JobId { get; set; }
    }
}
