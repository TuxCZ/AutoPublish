namespace AutoPublish.Domain.Enums
{
    public enum JobAction
    {
        Initialize = 0,
        Publish = 1,
        Remove = 2
    }

    public enum JobStatus
    {
        None = 0,
        Pending = 1,
        Running = 2,
        Success = 3,
        Failed = 4,
        Canceled = 5,
    }
}
