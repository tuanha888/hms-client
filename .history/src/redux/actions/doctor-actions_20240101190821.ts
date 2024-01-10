import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorsAPI } from "../fake-api/doctor-api";


export interface DoctorRequest {
    name: string,
    address: string,
    departmentId: string,
    birthday: Date,
    phoneNumber: string,
    gender: string,
    image: any,
}

export const getDoctors = createAsyncThunk(
    'get-doctors',
    async (_, {rejectWithValue}) => {
        return Promise.resolve(getDoctorsAPI())
    }
)

export const updateDoctor = createAsyncThunk(
    'create-doctor', 

)