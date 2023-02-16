import { HashRouter as Router, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
const RouterApp = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    }], { basename: "/framer-motion/" });

export default RouterApp;