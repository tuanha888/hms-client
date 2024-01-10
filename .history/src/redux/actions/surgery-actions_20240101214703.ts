import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSurgeryAPI } from "../fake-api/surgery-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";


export const getSurgeries = createAsyncThunk(
    'get-surgeries',
    async (_, {rejectWithValue}) => {
        return Promise.resolve(getSurgeryAPI());
    }
)
export interface SurgeryRequest {
    doctorId: string,
    patientId: string,
    time: Date,
    content: string,
    expectedTime: number
}
export const updateSurgery = createAsyncThunk(
    'update-surgery',
    async (data: {
        id: string,
        surgery: SurgeryRequest
    }, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.put(`${HOST_URL}/api/surgeries/${data.id}`, data.surgery,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);;
    }
)

export const deleteSurgery = createAsyncThunk(
    'delete-surgery',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.delete(`${HOST_URL}/api/surgeries/${id}`,{
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
export const createSurgery = createAsyncThunk(
    'create-surgery',
    async (data: any, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/surgeries`, data,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);;
    }
)