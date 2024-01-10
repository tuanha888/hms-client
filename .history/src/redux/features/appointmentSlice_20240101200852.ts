import { createSlice } from "@reduxjs/toolkit"
import { createAppointment, getAppointmentsOfDoctor, getAppointmentsOfPatient, updateAppointment } from "../actions/appointment-actions"


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
    },
    extraReducers(builder) {
        builder.addCase(getAppointmentsOfDoctor.fulfilled, (state, action)=> {
            state.doctorAppointments = action.payload;
        })
        builder.addCase(getAppointmentsOfPatient.fulfilled, (state, action) => {
            state.patientAppointments = action.payload;
        })
        builder.addCase(createAppointment.fulfilled, (state, action) => {
            state.patientAppointments = [...state.patientAppointments, action.payload]
        })
        builder.addCase(updateAppointment.fulfilled, (state, action) => {
            state.patientAppointments = state.patientAppointments.map(appointment => {
                if (appointment.id !== action.payload.id) return appointment
                else return action.payload
            })
        })
    },
})

export const {} = appointmentSlice.actions
export default appointmentSlice.reducer