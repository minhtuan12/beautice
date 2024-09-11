import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoadingGetMe: false,
        authUser: {},
        isAuthSuccess: false
    },
    reducers: {
        startRequestRegister: (state) => ({
            ...state,
            isLoadingBtnRegister: true
        }),
        requestRegisterSuccess: (state) => ({
            ...state,
            isLoadingBtnRegister: false
        }),
        requestRegisterFail: (state) => ({
            ...state,
            isLoadingBtnRegister: false
        }),
        startRequestLogin: (state) => ({
            ...state,
            isLoadingBtnLogin: true
        }),
        requestLoginSuccess: (state) => ({
            ...state,
            isLoadingBtnLogin: false
        }),
        requestLoginFail: (state) => ({
            ...state,
            isLoadingBtnLogin: false
        }),
        startRequestGetMe: (state) => ({
            ...state,
            isLoadingGetMe: true
        }),
        requestGetMeSuccess: (state, action) => ({
            ...state,
            isLoadingGetMe: false,
            authUser: action.payload
        }),
        requestGetMeFail: (state) => ({
            ...state,
            isLoadingGetMe: false,
            authUser: {}
        }),
        setIsAuthSuccess: (state, action) => ({
            ...state,
            isAuthSuccess: action.payload
        })
    }
})

export const {
    startRequestRegister,
    requestRegisterSuccess,
    requestRegisterFail,
    startRequestLogin,
    requestLoginSuccess,
    requestLoginFail,
    startRequestGetMe,
    requestGetMeSuccess,
    requestGetMeFail,
    setIsAuthSuccess,
} = authSlice.actions

export default authSlice.reducer
