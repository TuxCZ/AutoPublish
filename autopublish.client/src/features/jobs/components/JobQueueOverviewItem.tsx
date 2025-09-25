import { Card, Col, Row } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import { getProjectPublishResultColorString } from "../../../services/jobService";
import ProjectInfo from "../../projects/components/ProjectInfo";
import ResultBox from "../../../components/common/ResultBox";
import type { JobQueueItem } from "../../../types/Job";
import { eJobResult } from "../../../utils/enums/JobEnums";
import Widget from "../../../components/panels/Widget";

type JobQueueOverviewItemProps = {
    result: JobQueueItem
}

const JobQueueOverviewItem = ({ result }: JobQueueOverviewItemProps) => {
    return (
        <Widget>
            <Row className="g-2">
                <Col>
                    <ProjectInfo project={result.project} layout="two-column" />
                </Col>

                <Col xs="auto">
                    <ResultBox
                        caption="Status:"
                        statusString={result.resultString}
                        statusColor={getProjectPublishResultColorString(result)}
                    />

                    {result.result === eJobResult.Success && result.downloadUrl && (
                        <div className="mt-3 text-end">
                            <Button text="Stáhnout" icon="download" />
                        </div>
                    )}
                </Col>
            </Row>

            {result.result === eJobResult.Success && result.publishTime && (
                <small style={{ color: "dimgray" }}>
                    Publikováno: {result.publishTime.toLocaleString()} ({result.duration})
                </small>
            )}
        </Widget>
    );
}

export default JobQueueOverviewItem;