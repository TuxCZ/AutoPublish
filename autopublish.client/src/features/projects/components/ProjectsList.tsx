import { Button } from "devextreme-react/button";
import type { Project } from "../../../types/Project";
import { DataGrid, Column, Selection } from "devextreme-react/data-grid";
import CardSectionHeader from "../../../components/panels/CardSectionHeader";
import Widget from "../../../components/panels/Widget";

interface ProjectsListProps {
    projects: Project[];
    onDownload?: (url: string) => void;
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <Widget>
            <CardSectionHeader label="Seznam projektů">
                <Button
                    icon="plus"
                    type="normal"
                    onClick={() => console.log("Add clicked")}
                />
            </CardSectionHeader>

            <DataGrid
                dataSource={projects}
                rowAlternationEnabled
                noDataText="Zatím nebyl přidán žádný projekt"
                showBorders
            >
                <Selection mode="multiple" />

                <Column dataField="name" caption="Název projektu" />
                <Column dataField="branch" caption="Branch" />
                <Column caption="Akce" />
            </DataGrid>
        </Widget>
    );
}
