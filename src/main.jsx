import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AppProvider} from "./components/newsWebsite/Context/Context"
ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider >
        <App /> 
    </AppProvider>
)
