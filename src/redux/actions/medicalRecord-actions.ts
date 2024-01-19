import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMedicalRecords } from "../fake-api/medicalRecord-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";
import { toast } from "react-toastify";


export const getMedicalRecord = createAsyncThunk(
    'get-medical-record',
    async ()=> {
        
    }
)

export const getMedicalRecordOfPatients = createAsyncThunk(
    'get-medical-record-of-patients',
    async (id: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${HOST_URL}/api/medical_records?patientId=${id}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return convertDatesToObjects(response.data);;
    }
)

export const createMedicalRecord = createAsyncThunk(
    'create-medical',
    async (data: any, {rejectWithValue}) => {
        console.log(data)
        try {
            data.bhytcode = data.BHYTCode
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(`${HOST_URL}/api/medical_records`, data,{
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

export const updateMedicalRecord = createAsyncThunk(
    'update-medical',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.put(`${HOST_URL}/api/medical_records/${data.id}`, data.value,{
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
export const deleteMedicalRecord = createAsyncThunk(
    'delete-medical',
    async (id: string, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.delete(`${HOST_URL}/api/medical_records/${id}`,{
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