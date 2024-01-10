import { createSlice } from "@reduxjs/toolkit";


export interface User {
    id: string,
    name: string,
    avatar: string, 
    role: string,
}
const user = localStorage.getItem("currentUser");
const initValues = {
    user: (user ? JSON.parse(user) : null) as User
};
export const userSlice = createSlice({
    name: "user",
    initialState: initValues,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        
    },
})