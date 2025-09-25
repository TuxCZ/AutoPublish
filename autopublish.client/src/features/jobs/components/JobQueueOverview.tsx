import type { JobQueueItem } from "../../../types/Job";
import CenteredActionButton from "../../../components/buttons/CenteredActionButton";
import JobQueueOverviewItem from "./JobQueueOverviewItem";
import CardSectionHeader from "../../../components/panels/CardSectionHeader";

type JobQueueOverviewProps = {
    caption: string,
    jobQueue: JobQueueItem[],
    onShowAllClick: () => void,
}

const JobQueueOverview = ({ caption, jobQueue, onShowAllClick }: JobQueueOverviewProps) => {
    const noProjectPublished = !jobQueue || jobQueue.length == 0;

    return (
        <>
            <CardSectionHeader label={caption} />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {noProjectPublished && <div style={{ color: "red" }}>Zatím nebyl přidán žádný požadavek!</div>}

                {jobQueue.map((result) => (
                    <JobQueueOverviewItem result={result} />
                ))}
            </div>

            {!noProjectPublished && <div className="mt-3">
                <CenteredActionButton hideDivider caption="Zobrazit vše" onClick={onShowAllClick} />
            </div>}
        </>
    );
}

export default JobQueueOverview;