import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST_URL } from "./config";
import axios from 'axios'

export interface LoginProps {
    username: string,
    password: string
}
export const Login = createAsyncThunk(
    'login',
    async (data: LoginProps, {rejectWithValue}) => {
        const response = await axios.post(`${HOST_URL}/auth/login`, data);
        if (response.status < 200 || response.status >=300) {
            return rejectWithValue(response);
        }
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        return response.data;
    }
)

export const Logout = createAsyncThunk(
    'logout',
    async (_, {rejectWithValue}) => {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.post(`${HOST_URL}/api/auth/logout`, {}, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        if (response.status < 200 || response.status >=300) {
            return rejectWithValue(response);
        }
        localStorage.clear();
        return response;
    }
)