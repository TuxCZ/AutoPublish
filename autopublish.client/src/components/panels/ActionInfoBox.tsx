import CaptionText from "../common/CaptionText";
import { useDashboardContext } from "../../features/dashboard/hooks/useDashboardContext";

const ActionInfoBox = () => {
    const { currentAction } = useDashboardContext();

    const durationMs = Date.now() - (currentAction?.startTime?.getTime() ?? 0);
    const durationMin = Math.floor(durationMs / 60000);
    const durationSec = Math.floor((durationMs % 60000) / 1000);

    const durationString = currentAction?.startTime
        ? `${currentAction?.startTime?.toLocaleString()} (${durationMin}m ${durationSec}s)`
        : 'NA';

    return (
        <div style={{ fontSize: 15, lineHeight: 1.8, textAlign: "right" }}>
            <CaptionText caption="Spuštěno" text={durationString} />
            <CaptionText caption="Uživatel" text={currentAction?.userFullName ?? "NA"} />
            <CaptionText caption="Akce" text={currentAction?.actionName ?? "NA"} />
        </div>
    );
}

export default ActionInfoBox;