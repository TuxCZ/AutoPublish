import NavigationBreadcrumbs from "../../layouts/navigation/NavigationBreadcrumbs";
import { ProjectsList } from "./components/ProjectsList";

function ProjectListPage() {
    return (
        <>
            <NavigationBreadcrumbs />

            <ProjectsList projects={[]} />
        </>
    );
}

export default ProjectListPage;