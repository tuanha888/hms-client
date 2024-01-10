import { createAsyncThunk } from "@reduxjs/toolkit";


export const getMedicalRecord = createAsyncThunk(
    'get-medical-record',
    async ()=> {
        
    }
)

export const getMedicalRecordOfPatients = createAsyncThunk(
    'get-medical-record-of-patients',
    async (id: string, {rejectWithValue}) => {
        
    }
)