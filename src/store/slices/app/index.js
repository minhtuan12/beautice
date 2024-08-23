import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isVisibleSlidingBtn: window.innerWidth <= 1430
    },
    reducers: {
        setIsVisibleSlidingBtn: (state, action) => ({
            ...state,
            isVisibleSlidingBtn: action.payload
        })
    }
})

export const {
    setIsVisibleSlidingBtn
} = appSlice.actions

export default appSlice.reducer
