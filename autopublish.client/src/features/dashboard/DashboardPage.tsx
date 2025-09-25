import { Col, Row } from 'react-bootstrap';
import NavigationBreadcrumbs from "../../layouts/navigation/NavigationBreadcrumbs";
import { CurrentActionCard } from "./components/currentAction/CurrentActionCard";
import { StatisticsCard } from "./components/statisticsCard/StatisticsCard";
import { JobQueueCard } from "./components/jobQueue/JobQueueCard";
import { DashboardProvider } from "./context/DashboardContextProvider";

const DashboardPage = () => {
    return (
        <DashboardProvider>
            <NavigationBreadcrumbs />

            <Row className="g-2">
                <Col xs={12} md={6}>
                    <CurrentActionCard />
                    <JobQueueCard />
                </Col>

                <Col xs={12} md={6}>
                    <StatisticsCard />
                </Col>
            </Row>
        </DashboardProvider>
    );
}

export default DashboardPage;