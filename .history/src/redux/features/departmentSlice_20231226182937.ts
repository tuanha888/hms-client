import { createSlice } from "@reduxjs/toolkit"

export interface Department {
    id: string,
    name: string
}
const initValues = {
    departments: ([]) as Department[]
}
const departmentSlice = createSlice({
    name: "department",
    initialState: initValues,
    reducers: {
        setDepartments: (state, action) => {
            state.departments = action.payload
        }
    }
})