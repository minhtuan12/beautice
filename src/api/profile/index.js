import callApi from "../rootApi.js";

export const requestUpdateProfile = (data) => {
    return callApi({
        content: 'multipart/form-data',
        method: 'put',
        apiPath: `api/public/auth/update-profile`,
        variables: {
            full_name: data.fullName,
            phone: data.phone,
            avatar: data.avatar
        }
    })
}