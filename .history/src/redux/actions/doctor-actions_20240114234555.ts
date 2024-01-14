import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorsAPI } from "../fake-api/doctor-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";


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
        const response = await axios.get(`${HOST_URL}/doctors`)
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
    }
)

export const createDoctor = createAsyncThunk(
    'create-doctor', 
    async (data: any, {rejectWithValue})=> {
        console.log(data)
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/doctors/`, data,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data); 
    }
)

export const updateDoctor = createAsyncThunk(
    'update-doctor',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        console.log(data.value)
        const image = data.value.get("image")
        if (typeof image === "string") data.value.set("image", '')
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.put(`${HOST_URL}/api/doctors/${data.id}`, data.value,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
                
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
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