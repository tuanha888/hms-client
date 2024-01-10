import { createSlice } from "@reduxjs/toolkit"
import { getPosts, getPostsOfDoctor } from "../actions/post-actions"


export interface Post {
    id: string,
    title: string,
    content: string,
    cover: string,
    coverContent: string,
    summary: string,
    doctorId: string, 
    doctorName: string,
    categoryId: string,
    categoryName: string
}

const initValues : {
    posts: Post[],
    doctorPosts: Post[]
} = {
    posts: [],
    doctorPosts: []
}

export const postSlice = createSlice({
    name: "post",
    initialState: initValues,
    reducers: {
        
    },
    extraReducers: (builder) =>  {
        builder.addCase(getPosts.fulfilled, (state, action)=> {
            state.posts = action.payload;
        })
        builder.addCase(getPostsOfDoctor.fulfilled, (state, action)=> {
            state.doctorPosts = action.payload;
        })
    },
})

export const {} = postSlice.actions
export default postSlice.reducer