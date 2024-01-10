import { createSlice } from "@reduxjs/toolkit"

export interface Department {
    id: string,
    name: string
}
const initValues : {
    departments: Department[]
}= {
    departments: []
}
export const departmentSlice = createSlice({
    name: "department",
    initialState: initValues,
    reducers: {
        setDepartments: (state, action) => {
            state.departments = action.payload
        }
    }
})

export const {setDepartments} = departmentSlice.actions;

export default departmentSlice.reducer;