import { type ElementType, type ReactNode } from "react";

type ValidatableFieldProps<T> = {
    name: keyof T,
    label?: string,
    component: ElementType<any>,
    validationGroup?: string,
    children?: ReactNode | ReactNode[],
    [key: string]: any
};

export function ValidatableField<T>({
    name,
    label,
    component: Component,
    validationGroup,
    children,
    ...rest
}: ValidatableFieldProps<T>) {
    return (
        <div className="dx-field">
            <div className="dx-field-label">{label}</div>

            <div className="dx-field-value">
                <Component
                    name={name}
                    validationGroup={validationGroup}
                    {...rest}
                >
                {children}
                </Component>
            </div>
        </div>
    );
}
