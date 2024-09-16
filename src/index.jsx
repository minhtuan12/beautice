/** @jsxImportSource @emotion/react */
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
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./utils/queryClient.js";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers}/>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </Provider>
);

reportWebVitals();
