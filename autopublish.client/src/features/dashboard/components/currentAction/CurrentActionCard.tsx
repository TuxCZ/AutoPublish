import CurrentActionHeader from "./CurrentActionHeader";
import ProgressStatus from "../../../../components/common/ProgressStatus";
import CurrentActionCardContent from "./CurrentActionCardContent";

export const CurrentActionCard = () => {
    return (
        <div className="p-3 border rounded shadow text-white border-dark">
            <CurrentActionHeader />
            <hr />
            <CurrentActionCardContent />
            <ProgressStatus />
        </div>
    );
};
