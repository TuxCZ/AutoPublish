import type { eJobResult } from "../utils/enums/JobEnums";
import type { Project } from "./Project";

export interface JobQueueItem {
    project: Project,
    requestedBy: string,
    publishTime?: Date,
    duration?: string,
    downloadUrl?: string,
    result: eJobResult,
    resultString: string,
}