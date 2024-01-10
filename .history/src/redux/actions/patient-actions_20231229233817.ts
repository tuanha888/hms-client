import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPatientAPI } from "../fake-api/patient-api";


export const getPatient = createAsyncThunk(
    'get-patient',
    async (id: string, {rejectWithValue}) => {
        return Promise.resolve(getPatientAPI());
    }
)