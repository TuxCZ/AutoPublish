import { useDashboardContext } from "../../hooks/useDashboardContext";
import JobQueueOverview from "../../../jobs/components/JobQueueOverview";

export const JobQueueCard = () => {
    const { jobQueue } = useDashboardContext();
 
    const onShowAllClick = () => {
        console.log("Show all clicked");
    }

    return (
        <div className="p-3 border rounded shadow text-white border-dark mt-2">
            <JobQueueOverview
                caption="Fronta požadavků"
                jobQueue={jobQueue}
                onShowAllClick={onShowAllClick}
            />
        </div>
    );
};
