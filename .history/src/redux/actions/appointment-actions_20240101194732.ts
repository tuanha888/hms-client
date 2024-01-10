import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAppointments } from "../fake-api/appointment-api";
import axios from "axios";
import { HOST_URL } from "./config";

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
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/appointments`, data,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
export const updateAppointment = createAsyncThunk(
    'update-appointment',
    async (data: {
        id: string,
        appointment: any
    }, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.put(`${HOST_URL}/api/appointments/${data.id}`, data.appointment,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)