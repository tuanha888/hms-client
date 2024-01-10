import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "loading",
    initialState: {
        value: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setLoading} = notificationSlice.actions;
export default notificationSlice.reducer;