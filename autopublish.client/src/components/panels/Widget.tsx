import type { ReactNode } from "react";

type WidgetProps = {
    children: ReactNode,
    className?: string
}

const Widget = ({ children, className }: WidgetProps) => {
    return (
        <div className={"p-3 border rounded shadow text-white border-dark " + className}>
            {children}
        </div>
    );
}

export default Widget;