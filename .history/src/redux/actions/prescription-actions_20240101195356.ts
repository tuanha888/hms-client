import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakePrescriptions } from "../fake-api/prescription-api";
import axios from "axios";
import { HOST_URL } from "./config";


export const getPrescriptionOfPatient = createAsyncThunk(
    'get-prescription-of-patients',
    async (patientId: string, {rejectWithValue}) => {
        return Promise.resolve(fakePrescriptions)
    }
)

export const createPrescription = createAsyncThunk(
    'create-pres',
    async (data: any, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/prescriptions`, data,{
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