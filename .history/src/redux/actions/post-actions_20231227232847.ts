import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST_URL } from "./config";



export const getPosts = createAsyncThunk(
    'get-posts',
    async (_, {rejectWithValue})=> {
        const response = await axios.get(`${HOST_URL}/posts`);
        if (response.status < 200 || response.status >= 300 )
        {
            return rejectWithValue(response);
        }
        return response.data;
    }
)