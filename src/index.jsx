import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import 'animate.css';
import {routers} from "./router/routers.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routers}/>
);

reportWebVitals();
