import { createSlice } from "@reduxjs/toolkit"


export interface PostCategory {
    id: string,
    name: string
}

const initValues : {
    categories: PostCategory[]
} = {
    categories: []
}

export const postCategorySlice = createSlice({
    name: 'postCategory',
    initialState: initValues,
    reducers: {
        setCategories: (state, action)=> {
            state.categories = action.payload
        }
    },
    extraReducers(builder) {
        
    },
})