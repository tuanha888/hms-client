import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDoctorVotes = createAsyncThunk(
    'get-dotor-votes',
    async (doctorId: string,{rejectWithValue} ) => {
        
    }
)