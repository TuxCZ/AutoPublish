import type { ActionInfo, Entity } from "."

export interface Project extends Entity {
    name: string,
    path: string,
    branch: string,
    gitPath: string,
}

export interface ProjectActionInfo extends ActionInfo {
    project?: Project
}