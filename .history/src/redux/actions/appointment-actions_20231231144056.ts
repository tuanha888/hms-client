import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAppointmentsOfDoctor = createAsyncThunk(
    'get-appointments-of-doctor',
    async (_, {rejectWithValue})=> {

    }
)


export const getAppointmentsOfPatient = createAsyncThunk(
    'get-appointments-of-patient',
    async (_, {rejectWithValue})=> {
        
    }
)