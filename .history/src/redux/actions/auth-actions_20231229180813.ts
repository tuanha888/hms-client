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
        // const response = await axios.post(`${HOST_URL}/auth/login`, data);
        // if (response.status < 200 || response.status >=300) {
        //     return rejectWithValue(response);
        // }
        const response = {
            data: {
                id: "44548fc8-126c-4d24-b1ca-fd00d931367f",
                name: "ADMIN",
                avatar: "https://res.cloudinary.com/ddiudyz6q/image/upload/v1681701487/fadebook/avatars/woman-avatar_ztjjly.png",
                role: "ADMIN",
                accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NTQxNTViOS01ZTE5LTQxMDAtYWFlYS1iZDk2YThmZWFlODciLCJpYXQiOjE3MDM4NDc5NDUsImV4cCI6MTcwNDQ1Mjc0NX0.HBnLJnjOqktq25o_AXCTjLr5Gvqm8vyxO-4WoyrQNmk",
                refreshToken: "dd30854a-c114-4bb0-a3b0-0344737e8b75954155b9-5e19-4100-aaea-bd96a8feae87"
            }
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
        // const accessToken = localStorage.getItem('accessToken');
        // const response = await axios.post(`${HOST_URL}/api/auth/logout`, {}, {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`,
        //     }
        // })
        // if (response.status < 200 || response.status >=300) {
        //     return rejectWithValue(response);
        // }
        localStorage.clear();
        return response;
    }
)