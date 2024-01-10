import { createSlice } from "@reduxjs/toolkit"
import { deleteSurgery, getSurgeries, updateSurgery } from "../actions/surgery-actions"

export interface Surgery {
    id: string,
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    time: Date,
    content: string,
    expectedTime: number
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
        builder.addCase(updateSurgery.fulfilled, (state, action) => {
            state.surgeries = state.surgeries.map(surgery => {
                if (surgery.id !== action.payload.id) return surgery;
                else return action.payload;
            })
        })
        builder.addCase(deleteSurgery.fulfilled, (state, action) => {
            state.surgeries = state.surgeries.filter(surgery => surgery.id !== action.payload)
        })
    },
})

export const {setDoctorSurgeries, setSurgeries}= surgerySlice.actions
export default surgerySlice.reducer