import { createSlice } from "@reduxjs/toolkit"


export interface Appointment {
    id: string,
    doctorId: string,
    patientId: string,
    doctorName: string,
    patientName: string,
    time: Date,
    status: string,
    note: string

}

const initValues : {
    doctorAppointments: Appointment[],
    patientAppointments: Appointment[]
} = {
    doctorAppointments: [],
    patientAppointments: []
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: initValues,
    reducers: {
        setDoctorAppointments: (state, action)=> {
            state.doctorAppointments = action.payload
        },
        setPatientAppointments: (state, action)=> {
            state.patientAppointments = action.payload
        }
    }
})

export const {} = appointmentSlice.actions
export default appointmentSlice.reducer