import { Col, Row } from "react-bootstrap";
import ProjectInfo from "../../../projects/components/ProjectInfo";
import ActionInfoBox from "../../../../components/panels/ActionInfoBox";
import { useDashboardContext } from "../../hooks/useDashboardContext";

const CurrentActionCardContent = () => {
    const { currentAction } = useDashboardContext();

    return (
        <Row>
            <Col>
                <ProjectInfo project={currentAction?.project} />
            </Col>

            <Col>
                <ActionInfoBox />
            </Col>
        </Row>
    );
};

export default CurrentActionCardContent;