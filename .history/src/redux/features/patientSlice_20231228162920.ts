import { createSlice } from "@reduxjs/toolkit"


export interface Patient {
    id: string,
    name: string,
    address: string,
    birthday: Date,
    job: string,
    phoneNumber: string,
    nation: string,
    gender: string
}

const initValues : {
    doctorPatients: Patient[],
    patient: Patient | null
} = {
    doctorPatients: [],
    patient: null
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState: initValues,
    reducers: {
        setDoctorPatients: (state, action)=> {
            state.doctorPatients= action.payload
        },
        setPatient: (state, action)=> {
            state.patient = action.payload
        }

    },
    extraReducers(builder) {
        
    },
})