import type { ValidationErrors } from "../types/Validation";
import { mapValidationErrors } from "./ValidationUtils";

export const getAPIUrl = (): string => {
    if (window.location.port && window.location.port === "61224")
        return "https://localhost:7285/api";

    return "/api";
}

export const buildQueryParams = (params: Record<string, any>) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    });

    return searchParams.toString() ? `?${searchParams.toString()}` : "";
};

export const defaultAxiosErrorHandler = <T,>(error: any): { fieldErrors?: ValidationErrors<T>; generalError?: string } => {
    if (error?.response?.status === 400) {
        if (error.response.data?.errors) {
            const fieldErrors: ValidationErrors<T> = mapValidationErrors<T>(error.response.data?.errors);

            return { fieldErrors };
        }

        if (error.response.data?.errorString) {
            return { generalError: error.response.data.errorString };
        }
    }

    return { generalError: "An unknown error has occurred" };
};