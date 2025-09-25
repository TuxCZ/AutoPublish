import type { ReactNode } from "react";

type CardSectionHeaderProps = {
    label: string,
    children?: ReactNode,
}

const CardSectionHeader = ({ label, children }: CardSectionHeaderProps) => {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexGrow: 1 }}>
            <div style={{ marginBottom: 5 }}>
                <h3 style={{ marginTop: 0, marginBottom: 0 }}>{label}</h3>
            </div>

            {children && <div style={{ gap: 8 }}>
                {children}
            </div>}
        </div>
    );
}

export default CardSectionHeader;