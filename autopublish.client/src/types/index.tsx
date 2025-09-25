export interface Entity {
    id: string
}

export interface ActionInfo {
    actionName?: string,
    progress?: number,
    startTime?: Date,
    userFullName?: string,
    eta?: string,
}

export interface PublishStatisticsInfo {
    publishStatistics: PublishStatisticsItem[],
    publishDuration: NameValue[],
}

export interface PublishStatisticsItem {
    day: string,
    total: number,
    success: number,
    failed: number
}

export interface NameValue {
    name: string,
    value: number, 
}