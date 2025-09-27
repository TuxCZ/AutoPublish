import useAPI from "../../../hooks/useAPI";
import type { PublishStatisticsSummary } from "../../../types";
import type { JobQueueItem } from "../../../types/Job";
import type { ProjectActionInfo } from "../../../types/Project";
import { eJobResult } from "../../../utils/enums/JobEnums";

export type DashboardDataSource = {
    currentAction?: ProjectActionInfo,
    jobQueue: JobQueueItem[],
    statistics: PublishStatisticsSummary
}

const defaultDashboardData: DashboardDataSource = {
    jobQueue: [
        { project: { branch: "dev", gitPath: "test", id: "1", name: "testovací projekt", path: "c:\\publish" }, requestedBy: "František Feichtinger", result: eJobResult.Success, resultString: "Dokončeno", downloadUrl: "xx", duration: "2min", publishTime: new Date() },
        { project: { branch: "dev", gitPath: "test", id: "1", name: "testovací projekt", path: "c:\\publish" }, requestedBy: "František Feichtinger", result: eJobResult.Success, resultString: "Dokončeno", downloadUrl: "xx", duration: "2min", publishTime: new Date() },
        { project: { branch: "dev", gitPath: "test", id: "1", name: "testovací projekt", path: "c:\\publish" }, requestedBy: "František Feichtinger", result: eJobResult.Success, resultString: "Dokončeno", downloadUrl: "xx", duration: "2min", publishTime: new Date() }
    ],
    statistics: {
        publishStatistics: [],
        publishDuration: [],
    },
};

const useDashboard = () => {
    const { dataSource, setDataSource, loading, axiosResponse } = useAPI<DashboardDataSource>("/dashboard", [], {
        axiosType: "private",
    });

    return {
        ...defaultDashboardData,
        ...(dataSource ?? {}),
        setDataSource,
        loading,
        axiosResponse,
    };
};

export default useDashboard;