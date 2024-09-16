import callApi from "../rootApi.js";

export const requestUpdateProfile = (data) => {
    return callApi({
        method: 'put',
        apiPath: `auth/update-profile`,
        variables: {
            full_name: data.fullName,
            phone: data.phone,
            avatar: data.avatar
        }
    })
}