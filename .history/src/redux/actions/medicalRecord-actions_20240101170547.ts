import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMedicalRecords } from "../fake-api/medicalRecord-api";


export const getMedicalRecord = createAsyncThunk(
    'get-medical-record',
    async ()=> {
        
    }
)

export const getMedicalRecordOfPatients = createAsyncThunk(
    'get-medical-record-of-patients',
    async (id: string, {rejectWithValue}) => {
        return Promise.resolve(getMedicalRecords())
    }
)