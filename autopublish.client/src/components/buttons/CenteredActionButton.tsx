import Button from "devextreme-react/button";
import type { ButtonType } from "devextreme/ui/button_types";

type CenteredActionButtonProps = {
    hideDivider?: boolean,
    type?: ButtonType,
    caption: string,
    onClick: () => void,
}

const CenteredActionButton = ({ hideDivider, type, caption, onClick }: CenteredActionButtonProps) => {
    const additionalStyle = hideDivider ? { marginTop: 1 } : {};

    return (
        <>
            {hideDivider !== true && <hr style={{ marginTop: 2, marginBottom: 2 }} />}

            <div className="d-flex justify-content-center" style={{ ...additionalStyle }}>
                <Button type={type} onClick={onClick}>{caption}</Button>
            </div>
        </>
    );
}

export default CenteredActionButton;