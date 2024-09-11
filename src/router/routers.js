import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Home2 from "../pages/Home2/index.jsx";
import About from "../pages/About/index.jsx";
import Service from "../pages/Service/index.jsx";
import Gallery from "../pages/Gallery/index.jsx";
import Team from "../pages/Team/index.jsx";
import Blog from "../pages/Blog/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import {rootLoader} from "./rootLoader.js";
import Login from "../pages/Auth/Login/index.jsx";
import Register from "../pages/Auth/Register/index.jsx";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/home2',
        element: <Home2/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/about',
        element: <About/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/service',
        element: <Service/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/gallery',
        element: <Gallery/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/team',
        element: <Team/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/blog',
        element: <Blog/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/contact',
        element: <Contact/>,
        loader: ({request}) => rootLoader(
            {request}, false, ''
        )
    },
    {
        path: '/register',
        element: <Register/>,
        loader: ({request}) => rootLoader(
            {request}, false, 'LOAD_AUTH_PAGE'
        )
    },
    {
        path: '/login',
        element: <Login/>,
        loader: ({request}) => rootLoader(
            {request}, false, 'LOAD_AUTH_PAGE'
        )
    },
    {
        path: '/profile',
        element: '',
        loader: ({request}) => rootLoader(
            {request}, true, 'LOAD_AUTH_PAGE'
        )
    }
])
