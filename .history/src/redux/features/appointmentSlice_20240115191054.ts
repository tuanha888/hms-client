import { createSlice } from "@reduxjs/toolkit"
import { acceptAppoitment, createAppointment, deleteAppointment, getAppointmentsOfDoctor, getAppointmentsOfPatient, updateAppointment } from "../actions/appointment-actions"


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
        builder.addCase(deleteAppointment.fulfilled, (state, action) => {
            state.patientAppointments = state.patientAppointments.filter((appointment) => appointment.id !== action.payload)
        })
        builder.addCase(acceptAppoitment.fulfilled, (state, action)=> {
            state.doctorAppointments = state.doctorAppointments.map(app => {
                if (app.id !== action.payload) return app
                else {
                    app.status = "ACCEPT"
                    return app
                }
            })
        })
    },
})

export const {} = appointmentSlice.actions
export default appointmentSlice.reducer