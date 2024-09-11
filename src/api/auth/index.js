import callApi from "../rootApi.js";

export const register = (data) => {
    return callApi({
        method: 'post',
        apiPath: `auth/register`,
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
        apiPath: `auth/login`,
        variables: {
            phone: data.phone,
            password: data.password,
        }
    })
}

export const getMe = () => {
    return callApi({
        method: 'get',
        apiPath: `auth/me`,
        variables: {}
    })
}
