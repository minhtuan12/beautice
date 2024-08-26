import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Home2 from "../pages/Home2/index.jsx";
import About from "../pages/About/index.jsx";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/home2',
        element: <Home2/>,
    },
    {
        path: '/about',
        element: <About/>
    }
])
