import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakePrescriptions } from "../fake-api/prescription-api";


export const getPrescriptionOfPatient = createAsyncThunk(
    'get-prescription-of-patients',
    async (patientId: string, {rejectWithValue}) => {
        return Promise.resolve(fakePrescriptions)
    }
)