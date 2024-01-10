import { createSlice } from "@reduxjs/toolkit"

export interface TreatmentPlan {
    id: string,
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    treatmentMethod: string,
    lastExaminationDay: Date,
    nextExpectedExaminationDay: Date,
    note: string
}

const initValues: {
    treatmentPlans: TreatmentPlan[]
} = {
    treatmentPlans: []
}

export const treatmentPlanSlice = createSlice({
    name: "treatmentPlan",
    initialState: initValues,
    reducers: {
        setTreatmentPlans: (state, action) => {
            state.treatmentPlans = action.payload
        }
    }
})