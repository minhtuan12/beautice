import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Home2 from "../pages/Home2/index.jsx";
import About from "../pages/About/index.jsx";
import Service from "../pages/Service/index.jsx";
import Gallery from "../pages/Gallery/index.jsx";
import Team from "../pages/Team/index.jsx";
import Blog from "../pages/Blog/index.jsx";
import Contact from "../pages/Contact/index.jsx";

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
    },
    {
        path: '/service',
        element: <Service/>
    },
    {
        path: '/gallery',
        element: <Gallery/>
    },
    {
        path: '/team',
        element: <Team/>
    },
    {
        path: '/blog',
        element: <Blog/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])
