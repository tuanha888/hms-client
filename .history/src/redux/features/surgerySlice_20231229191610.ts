import { createSlice } from "@reduxjs/toolkit"
import { getSurgeries } from "../actions/surgery-actions"

export interface Surgery {
    id: string,
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    time: Date,
    content: string,
    expectedTime: Date
}

const initValues : {
    surgeries: Surgery[],
    doctorSurgeries: Surgery[]
} = {
    surgeries: [],
    doctorSurgeries: []
}

export const surgerySlice = createSlice({
    name: 'surgery',
    initialState: initValues,
    reducers: {
        setSurgeries: (state, action) => {
            state.surgeries = action.payload
        },
        setDoctorSurgeries: (state, action)=> {
            state.doctorSurgeries = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getSurgeries.fulfilled, (state, action)=> {
            state.surgeries = action.payload
        })
    },
})

export const {setDoctorSurgeries, setSurgeries}= surgerySlice.actions
export default surgerySlice.reducer