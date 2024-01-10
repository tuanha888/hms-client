import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAPI } from "../fake-api/category-api";


export const getCategories = createAsyncThunk(
    'get-categories',
    async (_, {rejectWithValue})=> {
        return Promise.resolve(getCategoriesAPI());
    }
)