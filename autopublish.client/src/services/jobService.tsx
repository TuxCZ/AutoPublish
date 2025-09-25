import type { JobQueueItem } from "../types/Job";
import { eJobResult } from "../utils/enums/JobEnums";

export const getProjectPublishResultColorString = (publishResult: JobQueueItem): string => {
    switch (publishResult.result) {
        case eJobResult.Queued: return "yellow";
        case eJobResult.Ongoing: return "orange";
        case eJobResult.Success: return "green";
        case eJobResult.Failed: return "red";
        default: return "warning";
    }
}