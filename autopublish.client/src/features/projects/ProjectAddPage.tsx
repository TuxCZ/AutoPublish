import { useCallback } from "react";
import { TextBox } from "devextreme-react/text-box";
import { SelectBox } from "devextreme-react/select-box";
import { ValidatableField } from "../../components/fields/ValidatableField";
import NavigationBreadcrumbs from "../../layouts/navigation/NavigationBreadcrumbs";
import ProjectDependenciesGrid from "./components/ProjectDependenciesGrid";
import CenteredActionButton from "../../components/buttons/CenteredActionButton";
import { Row, Col } from "react-bootstrap";
import CardSectionHeader from "../../components/panels/CardSectionHeader";
import Widget from "../../components/panels/Widget";

const ProjectAddPage = () => {
    const handleSubmit = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }, []);

    const projectTypes = [
        "Aplikace",
        "Webový projekt"
    ];

    return (
        <>
            <NavigationBreadcrumbs />

            <Row className="g-2 mb-3">
                <Col>
                    <Widget>
                        <CardSectionHeader label="Základní informace" />

                        <div className="dx-fieldset">
                            <ValidatableField name="name" label="Název projektu" component={TextBox} />
                            <ValidatableField name="gitPath" label="GIT Cesta" component={TextBox} />
                            <ValidatableField name="branch" label="GIT branch" component={TextBox} />
                            <ValidatableField name="projectType" label="Typ projektu" component={SelectBox} dataSource={projectTypes} />
                            <ValidatableField name="clientPath" label="Relativní cesta k typescript projektu" component={TextBox} />
                        </div>
                    </Widget>
                </Col>

                <Col>
                    <Widget>
                        <ProjectDependenciesGrid />
                    </Widget>
                </Col>
            </Row>

            <CenteredActionButton
                type="normal"
                caption="Vytvořit projekt"
                hideDivider
                onClick={() => console.log('')} />
        </>
    );
}

export default ProjectAddPage;