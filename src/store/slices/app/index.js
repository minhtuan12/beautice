import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isVisibleSlidingBtn: window.innerWidth <= 1430,
        visibleImageUnderTitle: window.innerWidth <= 1300,
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
    }
})

export const {
    setIsVisibleSlidingBtn, setVisibleImageUnderTitle
} = appSlice.actions

export default appSlice.reducer
