import { Badge, Col, Row } from "react-bootstrap";

type ResultBoxProps = {
    caption: string,
    statusString: string,
    statusColor: string
}

const ResultBox = ({ caption, statusString, statusColor }: ResultBoxProps) => {
    return (
        <Row className="align-items-center g-2" style={{ width: "auto" }}>
            <Col xs="auto">
                <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    {caption}
                </span>
            </Col>

            <Col xs="auto">
                <Badge
                    pill
                    style={{
                        backgroundColor: statusColor,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        padding: "4px 12px",
                    }}
                >
                    {statusString}
                </Badge>
            </Col>
        </Row>
    );
};

export default ResultBox;