import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import 'animate.css';
import {routers} from "./router/routers.js";
import {Provider} from "react-redux";
import store from "./store/configureStore.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers}/>
        </QueryClientProvider>
    </Provider>
);

reportWebVitals();
