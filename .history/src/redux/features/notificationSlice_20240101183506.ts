import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        value: true
    },
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setLoading} = notificationSlice.actions;
export default notificationSlice.reducer;