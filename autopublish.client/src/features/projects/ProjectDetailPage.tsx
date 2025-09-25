import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from 'devextreme-react/button';
import { Chart, Series, Tooltip, Legend } from 'devextreme-react/chart';
import { PieChart, Series as PieChartSeries } from 'devextreme-react/pie-chart';

import JobQueueOverview from "../jobs/components/JobQueueOverview";
import ProjectDependenciesGrid from "./components/ProjectDependenciesGrid";
import CardSectionHeader from '../../components/panels/CardSectionHeader';
import Widget from '../../components/panels/Widget';
import NavigationBreadcrumbs from '../../layouts/navigation/NavigationBreadcrumbs';

const ProjectDetailPage = () => {
    const publishResultData = [
        { id: 0, value: 90, label: 'Úspěšné', color: '#4CBB17' },
        { id: 1, value: 10, label: 'Neúspěšné', color: '#D70040' },
    ];

    const publishDurationData = [
        { job: 'Pondělí', duration: 5 },
        { job: 'Úterý', duration: 8 },
        { job: 'Středa', duration: 3 },
        { job: 'Čtvrtek', duration: 3 },
        { job: 'Pátek', duration: 3 },
    ];

    return (
        <>
            <NavigationBreadcrumbs />

            <Row className="g-2">
                <Col>
                    <Widget>
                        <CardSectionHeader label="Detail projektu xx">
                            <Button text="Historie publish požadavků" type="normal" style={{ marginRight: 5 }} />
                            <Button text="Upravit projekt" type="default" style={{ color: 'white', marginRight: 5 }} />
                            <Button text="Smazat projekt" type="danger" style={{ color: 'white' }} />
                        </CardSectionHeader>

                        <Row className="g-2">
                            <Col>
                                <h5 style={{ marginBottom: 10, marginTop: 0 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> Název projektu
                                </h5>
                                <span>Karlův projekt</span>

                                <h5 style={{ marginBottom: 10 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> Branch
                                </h5>
                                <span>DEV</span>

                                <h5 style={{ marginBottom: 10 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> Vytvořil
                                </h5>
                                <span>František Feichtinger</span>

                                <h5 style={{ marginBottom: 10 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> GIT Cesta
                                </h5>
                                <span>http://127.45.151.1/super-git.NazevProjektu.git</span>
                            </Col>

                            <Col>
                                <h5 style={{ marginBottom: 10, marginTop: 0 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> Počet publishnutí
                                </h5>
                                <span>0</span>

                                <h5 style={{ marginBottom: 10 }}>
                                    <span className="dx-icon dx-icon-upload" style={{ fontSize: 22 }} /> Poslední publish
                                </h5>
                                <span>23.09.2025</span>
                            </Col>
                        </Row>
                    </Widget>

                    <Widget className="mt-2">
                        <ProjectDependenciesGrid />
                    </Widget>
                </Col>

                <Col>
                    <Widget>
                        <h5 style={{ textAlign: 'center' }}>Úspěšnost publishů</h5>

                        <PieChart dataSource={publishResultData} height={200}>
                            <PieChartSeries argumentField="label" valueField="value" />
                        </PieChart>

                        <div style={{ marginTop: 16 }}>
                            <h5 style={{ textAlign: 'center' }}>Statistika publishů</h5>
                            <Chart dataSource={publishDurationData} height={200}>
                                <Series valueField="duration" argumentField="job" type="bar" />
                                <Tooltip enabled />
                                <Legend visible />
                            </Chart>
                        </div>
                    </Widget>
                </Col>
            </Row>

            <div className="mt-2">
                <JobQueueOverview caption="" jobQueue={[]} onShowAllClick={() => console.log('show all')} />
            </div>
        </>
    );
};

export default ProjectDetailPage;