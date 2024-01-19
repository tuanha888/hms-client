import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakePrescriptions } from "../fake-api/prescription-api";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";
import { toast } from "react-toastify";


export const getPrescriptionOfPatient = createAsyncThunk(
    'get-prescription-of-patients',
    async (patientId: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${HOST_URL}/api/prescriptions?patient_id=${patientId}`, {
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

export const createPrescription = createAsyncThunk(
    'create-pres',
    async (data: any, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(`${HOST_URL}/api/prescriptions`, data,{
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

export const updatePrescription = createAsyncThunk(
    'update-pres',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.put(`${HOST_URL}/api/prescriptions/${data.id}`, data.value,{
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

export const deletePrescription = createAsyncThunk(
    'delete-pres',
    async (id: string, {rejectWithValue} ) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.delete(`${HOST_URL}/api/prescriptions/${id}`,{
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