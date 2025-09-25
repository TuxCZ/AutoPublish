import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import config from 'devextreme/core/config'; 
import App from './App.tsx'
import { licenseKey } from './license.tsx';
import 'devextreme/dist/css/dx.darkviolet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css';

config({ licenseKey });   

const baseElements = document.getElementsByTagName('base');
let baseURL = "/";
if (baseElements && baseElements.length > 0) {
    baseURL = baseElements[0].getAttribute('href') ?? "/";
}

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={baseURL}>
        <App />
    </BrowserRouter>,
)
