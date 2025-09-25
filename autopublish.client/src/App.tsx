import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashboardPage from './features/dashboard/DashboardPage';
import ProjectAddPage from './features/projects/ProjectAddPage';
import ProjectDetailPage from './features/projects/ProjectDetailPage';
import AuthenticationPage from './features/authentication/AuthenticationPage';
import ProjectListPage from './features/projects/ProjectListPage';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/authentication' element={<AuthenticationPage />} />

                <Route path='/projects' element={<ProjectListPage />} />
                <Route path='/projects/new' element={<ProjectAddPage />} />
                <Route path='/projects/:slug' element={<ProjectDetailPage />} />
            </Routes>
        </Layout>
    );
}

export default App;