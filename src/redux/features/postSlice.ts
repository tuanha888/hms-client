import { createSlice } from "@reduxjs/toolkit"
import { createPost, deletePost, getPosts, getPostsOfDoctor, updatePost } from "../actions/post-actions"


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
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.doctorPosts = [...state.doctorPosts, action.payload]
        })
        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.doctorPosts = state.doctorPosts.map(post => {
                if (post.id !== action.payload.id) return post
                else return action.payload
            })

        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.doctorPosts = state.doctorPosts.filter(post => post.id !== action.payload)
        })
    },
})

export const {} = postSlice.actions
export default postSlice.reducer