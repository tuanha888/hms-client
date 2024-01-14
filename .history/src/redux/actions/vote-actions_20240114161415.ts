import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVotesOfDoctorAPI } from "../fake-api/vote-api";


export const getDoctorVotes = createAsyncThunk(
    'get-dotor-votes',
    async (doctorId: string,{rejectWithValue} ) => {
        return Promise.resolve(getVotesOfDoctorAPI())
    }
)