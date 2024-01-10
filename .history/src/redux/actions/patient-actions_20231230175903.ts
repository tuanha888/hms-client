
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPatientAPI } from "../fake-api/patient-api";


export const getPatient = createAsyncThunk(
    'get-patient',
    async (id: string, {rejectWithValue}) => {
        return Promise.resolve(getPatientAPI());
    }
)
export const getPatients = createAsyncThunk(
    'get-patients', 
    async (_,{rejectWithValue} ) => {
        let patients : any;
        for (let i=0; i<10; ++i) 
        {
            patients.push(getPatientAPI());
        }
        return Promise.resolve(patients);
    }
)