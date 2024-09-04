import {createSlice} from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        filter: {
            q: '',
            currentPage: 1
        }
    },
    reducers: {
        setFilter: (state, action) => ({
            ...state,
            filter: action.payload
        })
    }
})

export const {
    setFilter
} = blogSlice.actions

export default blogSlice.reducer
