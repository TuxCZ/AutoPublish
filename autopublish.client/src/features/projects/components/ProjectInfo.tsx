import { Col, Row } from "react-bootstrap";
import CaptionText from "../../../components/common/CaptionText";
import type { Project } from "../../../types/Project";

type ProjectInfoProps = {
    project?: Project,
    layout?: "default" | "two-column"
}

const ProjectInfo = ({ project, layout }: ProjectInfoProps) => {
    return (
        <div style={{ fontSize: 15, lineHeight: 1.8 }}>
            <Row>
                <Col md={layout == "two-column" ? 6 : 12}>
                    <CaptionText caption="Název" text={project?.name ?? "NA"} />
                    <CaptionText caption="Cesta" text={project?.path ?? "NA"} />
                </Col>

                <Col md={layout == "two-column" ? 6 : 12}>
                    <CaptionText caption="Branch" text={project?.branch ?? "NA"} />
                    <CaptionText caption="Git cesta" text={project?.gitPath ?? "NA"} />
                </Col>
            </Row>
        </div>
    );
}

export default ProjectInfo;