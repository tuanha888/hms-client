import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorsAPI } from "../fake-api/doctor-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";
import { toast } from "react-toastify";

export interface DoctorRequest {
    name: string,
    address: string,
    departmentId: string,
    birthday: Date,
    phoneNumber: string,
    gender: string,
    image: any,
}
export const getDoctor = createAsyncThunk(
    'get-doctor',
    async (id: string, {rejectWithValue}) => {
        const response = await axios.get(`${HOST_URL}/doctors/${id}`)
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        response.data.role = "DOCTOR"
        response.data.avatar = response.data.image
        response.data.phoneNumber = response.data.phoneNumber.replace('84','0')
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        return convertDatesToObjects(response.data);
    }
)
export const getDoctors = createAsyncThunk(
    'get-doctors',
    async (_, {rejectWithValue}) => {
        const response = await axios.get(`${HOST_URL}/doctors/all`)
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
    }
)

export const createDoctor = createAsyncThunk(
    'create-doctor', 
    async (data: any, {rejectWithValue})=> {
        try {
            const emptyImage : File  = new File([], "hello")
            const image = data.get("image")
            if (image === null) data.set("image", emptyImage)
            let phoneNumber = data.get('phoneNumber')
            phoneNumber = phoneNumber.replace('0','84')
            data.set('phoneNumber', phoneNumber)
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(`${HOST_URL}/api/doctors/`, data,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success("Thành công!")
            return convertDatesToObjects(response.data);
        } catch (error) {
            toast.error("Thất bại!")
            return rejectWithValue(error);
        }

         
    }
)

export const updateDoctor = createAsyncThunk(
    'update-doctor',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        console.log(data.value)
        try {
            const emptyImage : File  = new File([], "hello")
            const image = data.value.get("image")
            if (typeof image === "string") data.value.set("image", emptyImage)
            let phoneNumber = data.value.get('phoneNumber')
            phoneNumber = phoneNumber.replace('0','84')
            data.value.set('phoneNumber', phoneNumber)
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.put(`${HOST_URL}/api/doctors/${data.id}`, data.value,{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    
                }
            })
            toast.success("Thành công!")
            return convertDatesToObjects(response.data);
        } catch (error) {
            toast.error("Thất bại!")
            return rejectWithValue(error);
        }

        
    }
)

export const deleteDoctor = createAsyncThunk(
    'delete-doctor',
    async (id: string, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.delete(`${HOST_URL}/api/doctors/${id}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success("Thành công!")
            return id;
        } catch (error) {
            toast.error("Thất bại!")
            return rejectWithValue(error);
        }

        
    }
)