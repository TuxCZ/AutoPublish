import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

export const useDashboardContext = () => {
    const ctx = useContext(DashboardContext);
    if (!ctx) throw new Error("useDashboardContext must be used inside DashboardProvider");
    return ctx;
};