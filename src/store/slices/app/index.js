import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isVisibleSlidingBtn: window.innerWidth <= 1430,
        isVisibleMenuBox: false,
        visibleImageUnderTitle: window.innerWidth <= 1300,
        visibleStickyHeader: window.pageYOffset > 340 || document.documentElement.scrollTop > 340,
        goToPage: {
            path: "",
            redirected: true
        },
    },
    reducers: {
        setIsVisibleMenuBox: (state, action) => ({
            ...state,
            isVisibleMenuBox: action.payload
        }),
        setIsVisibleSlidingBtn: (state, action) => ({
            ...state,
            isVisibleSlidingBtn: action.payload
        }),
        setVisibleImageUnderTitle: (state, action) => ({
            ...state,
            visibleImageUnderTitle: action.payload
        }),
        setVisibleStickyHeader: (state, action) => ({
            ...state,
            visibleStickyHeader: action.payload
        }),
        goToPage: (state, action) => ({
            ...state,
            goToPage: {
                path: action.payload.path,
                redirected: false
            }
        }),
        goToPageSuccess: (state) => ({
            ...state,
            goToPage: {
                ...state.goToPage,
                redirected: true
            }
        })
    }
})

export const {
    setIsVisibleMenuBox,
    goToPage, goToPageSuccess,
    setVisibleStickyHeader,
    setIsVisibleSlidingBtn, setVisibleImageUnderTitle
} = appSlice.actions

export default appSlice.reducer
