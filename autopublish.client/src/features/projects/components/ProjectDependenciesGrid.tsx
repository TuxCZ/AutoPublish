import Button from "devextreme-react/button";
import { DataGrid, Column, Selection } from 'devextreme-react/data-grid';
import CardSectionHeader from "../../../components/panels/CardSectionHeader";

const ProjectDependenciesGrid = () => {
    return (
        <>
            <CardSectionHeader label="Dependent projekty">
                <Button type="normal">Přidat projekt</Button>
            </CardSectionHeader>

            <DataGrid
                wordWrapEnabled
                rowAlternationEnabled
            >
                <Selection mode="multiple" />

                <Column dataField="name" caption="Název projektu" sortOrder="asc" />
                <Column dataField="branch" caption="Branch" width={80} />
                <Column dataField="sourceDirectory" caption="Zdrojová složka" />
                <Column dataField="targetDirectory" caption="Cílová složka" />
            </DataGrid>
        </>
    );
}

export default ProjectDependenciesGrid;