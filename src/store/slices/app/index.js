import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isVisibleSlidingBtn: window.innerWidth <= 1430,
        visibleImageUnderTitle: window.innerWidth <= 1300,
        visibleStickyHeader: window.pageYOffset > 340 || document.documentElement.scrollTop > 340
    },
    reducers: {
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
        })
    }
})

export const {
    setVisibleStickyHeader,
    setIsVisibleSlidingBtn, setVisibleImageUnderTitle
} = appSlice.actions

export default appSlice.reducer
