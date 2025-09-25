import { ProgressBar } from 'devextreme-react/progress-bar';
import type { ActionInfo } from "../../types";

type ProgressStatusProps = {
    status?: ActionInfo
}

const ProgressStatus = ({ status }: ProgressStatusProps) => {
    const { actionName, eta, progress } = status || {};

    return (
        <div style={{ marginTop: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: "bold" }}>{actionName ?? "Probíhá..."}</span>
                <span>{eta ?? ""}</span>
            </div>

            <ProgressBar value={progress ?? 0} showStatus={true} statusFormat={(v) => `${v}%`} />
        </div>
    );
}

export default ProgressStatus;