import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSurgeryAPI } from "../fake-api/surgery-api";


export const getSurgeries = createAsyncThunk(
    'get-surgeries',
    async (_, {rejectWithValue}) => {
        return Promise.resolve(getSurgeryAPI());
    }
)