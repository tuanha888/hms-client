
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPatientAPI } from "../fake-api/patient-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";
import { toast } from "react-toastify";


export const getPatient = createAsyncThunk(
    'get-patient',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken")
        const response = await axios.get(`${HOST_URL}/api/patients/${id}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
        } )
        response.data.role = "PATIENT"
        response.data.avatar = "https://res.cloudinary.com/ddiudyz6q/image/upload/v1705380139/hms/avatars/6yvpkj_d98mou.jpg"
        response.data.phoneNumber = response.data.phoneNumber.replace('84','0')
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
    }
)
export const getPatients = createAsyncThunk(
    'get-patients', 
    async (_,{rejectWithValue} ) => {
        const accessToken = localStorage.getItem("accessToken")
        const response = await axios.get(`${HOST_URL}/api/patients`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
    }
)
export const getDoctorPatients = createAsyncThunk(
    'get-doctor-patients',
    async (_, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken")
        const response = await axios.get(`${HOST_URL}/api/patients/doctor`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);
    }
)

export const createPatient = createAsyncThunk(
    'create-patient',
    async (data: any, {rejectWithValue}) => {
        console.log(data)
        try {
            let phoneNumber = data.phoneNumber
            phoneNumber = phoneNumber.replace('0','84')
            data.phoneNumber = phoneNumber
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(`${HOST_URL}/api/patients`, data,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success("Thành công!")
            return convertDatesToObjects(response.data);;
        } catch (error) {
            toast.error("Thất bại!")
            return rejectWithValue(error);
        }
        
        
    }
)

export const updatePatient = createAsyncThunk(
    'update-patient',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        try {
            data.value.phoneNumber = data.value.phoneNumber.replace('0', '84')
            const accessToken = localStorage.getItem("accessToken");
            console.log(data.value)
            const response = await axios.put(`${HOST_URL}/api/patients/${data.id}`, data.value,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success("Thành công!")
            return convertDatesToObjects(response.data);;
        } catch (error) {
            toast.error("Thất bại!")
            return rejectWithValue(error);
        }
        
        
    }
)

export const deletePatient = createAsyncThunk(
    'delete-patient',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.delete(`${HOST_URL}/api/patients/${id}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >= 300) {
            toast.error("Thất bại!")
            rejectWithValue(response);
            
        }
        toast.success("Thành công!")
        return id;
    }
        
)