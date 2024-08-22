import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/index.jsx";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    }
])
