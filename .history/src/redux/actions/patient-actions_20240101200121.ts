
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPatientAPI } from "../fake-api/patient-api";
import axios from "axios";
import { HOST_URL } from "./config";


export const getPatient = createAsyncThunk(
    'get-patient',
    async (id: string, {rejectWithValue}) => {
        return Promise.resolve(getPatientAPI());
    }
)
export const getPatients = createAsyncThunk(
    'get-patients', 
    async (_,{rejectWithValue} ) => {
        let patients : any = [];
        for (let i=0; i<10; ++i) 
        {
            patients.push(getPatientAPI());
        }
        return Promise.resolve(patients);
    }
)
export const getDoctorPatients = createAsyncThunk(
    'get-doctor-patients',
    async (_, {rejectWithValue}) => {
        let patients : any = [];
        for (let i=0; i<10; ++i) 
        {
            patients.push(getPatientAPI());
        }
        return Promise.resolve(patients);
    }
)

export const createPatient = createAsyncThunk(
    'create-patient',
    async (data: any, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(`${HOST_URL}/api/patients`, data,{
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

export const updatePatient = createAsyncThunk(
    'update-patient',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.put(`${HOST_URL}/api/patients/${data.id}`, data.value,{
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

export const deletePatient = createAsyncThunk(
    'delete-patient',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.delete(`${HOST_URL}/api/medical_records/${id}`,{
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