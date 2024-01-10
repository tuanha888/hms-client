import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorsAPI } from "../fake-api/doctor-api";
import axios from "axios";
import { HOST_URL } from "./config";


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

export const createDoctor = createAsyncThunk(
    'create-doctor', 
    async (data: DoctorRequest, {rejectWithValue})=> {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/doctors`, data,{
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

export const updateDoctor = createAsyncThunk(
    'update-doctor',
    async (data: {
        id: string,
        doctor: DoctorRequest
    }, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.put(`${HOST_URL}/api/doctors/${data.id}`, data.doctor,{
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

export const deleteDoctor = createAsyncThunk(
    'delete-doctor',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.delete(`${HOST_URL}/api/doctors/${id}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return id;
    }
)