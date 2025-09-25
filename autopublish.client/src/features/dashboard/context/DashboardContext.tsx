import { createContext } from "react";
import type { DashboardDataSource } from "../hooks/useDashboard";

export const DashboardContext = createContext<DashboardDataSource | null>(null);