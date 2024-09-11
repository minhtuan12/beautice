import axios from "axios";
import {getAuthToken, removeAuthToken} from "../utils/helpers.js";

export default async function callApi(
    {
        content,
        method,
        apiPath,
        variables,
        headers
    }) {
    const token = getAuthToken();
    const header = {
        "Content-Type": content ? content : "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    };

    return axios({
        baseURL: import.meta.env.VITE_API_URL,
        headers: headers ? {...headers, ...header} : header,
        method: method,
        url: apiPath,
        data: variables,
        params: method === 'get' ? variables : ''
    })
        .then(function (response) {
            return response.data;
        })
        .catch((error) => {
            let response = error.response ? error.response : error;
            // if (response.status === 401) {
            //     removeAuthToken()
            //     window.location.href = '/login'
            // } else if (response.status === 403) {
            //     window.location.href = '/forbidden'
            // }
            throw response
        })
}
