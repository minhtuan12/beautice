import callApi from "../rootApi.js";

export const register = (data) => {
    return callApi({
        method: 'post',
        apiPath: `api/public/auth/register`,
        variables: {
            full_name: data.fullName,
            phone: data.phone,
            password: data.password,
        }
    })
}
export const login = (data) => {
    return callApi({
        method: 'post',
        apiPath: `api/public/auth/login`,
        variables: {
            phone: data.phone,
            password: data.password,
        }
    })
}

export const getMe = () => {
    return callApi({
        method: 'get',
        apiPath: `api/public/auth/me`,
        variables: {}
    })
}
