import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST_URL, convertDatesToObjects } from "./config";
import { toast } from "react-toastify";


export const getTreatmentPlanOfPatients = createAsyncThunk(
    'get-treatment-plan',
    async (patientId: string, {rejectWithValue}) => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${HOST_URL}/api/treatment_plans/patient?patientId=${patientId}`, {
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

export const createTreatmentPlan = createAsyncThunk(
    'create-treatment',
    async (data: any, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(`${HOST_URL}/api/treatment_plans`, data,{
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

export const updateTreatmentPlan = createAsyncThunk(
    'update-treatment-plans',
    async (data: {
        id: string,
        value: any
    }, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.put(`${HOST_URL}/api/treatment_plans/${data.id}`, data.value,{
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

export const deleteTreatmentPlan = createAsyncThunk(
    'delete-treatment',
    async (id: string, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.delete(`${HOST_URL}/api/treatment_plans/${id}`,{
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