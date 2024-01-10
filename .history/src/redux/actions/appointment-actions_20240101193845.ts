import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAppointments } from "../fake-api/appointment-api";

interface AppointmentRequest {
    doctorId: string,
    time: Date,
    note: string
}
export const getAppointmentsOfDoctor = createAsyncThunk(
    'get-appointments-of-doctor',
    async (_, {rejectWithValue})=> {
        return Promise.resolve(fakeAppointments);
    }
)


export const getAppointmentsOfPatient = createAsyncThunk(
    'get-appointments-of-patient',
    async (_, {rejectWithValue})=> {
        return Promise.resolve(fakeAppointments);
    }
)

export const createAppointment = createAsyncThunk(
    'create-appointment',
    async (data: any, {rejectWithValue} ) => {

    }
)