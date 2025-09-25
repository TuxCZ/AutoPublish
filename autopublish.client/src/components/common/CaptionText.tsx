type CaptionTextProps = {
    caption: string;
    text: string;
}

const CaptionText = ({ caption, text }: CaptionTextProps) => {
    return (
        <>
            <h5 className="my-0">
                <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> {caption}
            </h5>

            <span>{text}</span>
        </>
    );
};

export default CaptionText;
