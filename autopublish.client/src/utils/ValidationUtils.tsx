import type { ValidationErrors } from "../types/Validation";

export function mapValidationErrors<T>(errorObject: Record<string, string[] | undefined>): ValidationErrors<T> {
    const mappedErrors: ValidationErrors<T> = {};

    Object.entries(errorObject).forEach(([key, messages]) => {
        const field = key.charAt(0).toLowerCase() + key.slice(1);

        if (Array.isArray(messages) && messages.length > 0) {
            mappedErrors[field as keyof T] = "*" + messages[0];
        }
    });

    return mappedErrors;
}