using AutoPublish.Domain.Entities;

namespace AutoPublish.Contracts.Dashboard.Responses
{
    public class GetDashboardResponse
    {
        public required Job? ActiveJob { get; set; }
        public required List<Job> JobQueue { get; set; }
        public required PublishStatisticsSummary Statistics { get; set; }
    }

    public record PublishStatisticsSummary(
         IReadOnlyList<PublishStatisticsItem> PublishStatistics,
         IReadOnlyList<PublishDurationItem> PublishDurationStatistics);

    public record PublishStatisticsItem(
        DateOnly Day,
        int Total,
        int Success,
        int Failed);

    public record PublishDurationItem(string Name, long ValueInSeconds);
}
