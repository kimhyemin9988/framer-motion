import { HashRouter as Router, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Slider from './Slider';
const RouterApp = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path:"slider",
                element:<Slider />,
            }
        ],
    }], { basename: "/framer-motion" });

export default RouterApp;