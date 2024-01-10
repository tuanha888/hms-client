import { createSlice } from "@reduxjs/toolkit"


export interface Medicine {
    id: string,
    prescriptionId: string,
    name: string,
    quantity: number,
    breakfast: number,
    lunch: number,
    dinner: number,
    beforeBreakfast: boolean,
    beforeLunch: boolean,
    beforeDinner: boolean
}

export interface Prescription {
    id: string,
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    createdDay: Date,
    note: string,
    medicines: Medicine[]
}

const initValues : {
    patientPrescriptions: Prescription[]
} = {
    patientPrescriptions: []
}

export const prescriptionSlice = createSlice({
    name: "prescription",
    initialState: initValues,
    reducers: {
        setPatientPrescriptions: (state, action)=> {
            state.patientPrescriptions = action.payload
        }

    },
    extraReducers(builder) {
        
    },
})