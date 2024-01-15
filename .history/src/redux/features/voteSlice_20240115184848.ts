import { createSlice } from "@reduxjs/toolkit"
import { addVote, deleteVote, getDoctorVotes, updateVote } from "../actions/vote-actions"


export interface Vote {
    id: string,
    patientId: string,
    patientName: string,
    doctorId: string,
    doctorName: string
    rating: number,
    content: string
}
const initValues : {
    doctorVotes: Vote[]
} = {
    doctorVotes: []
}

export const voteSlice = createSlice({
    name: 'vote',
    initialState: initValues,
    reducers: {
        setDoctorVotes: (state, action)=> {
            state.doctorVotes = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getDoctorVotes.fulfilled, (state, action) => {
            state.doctorVotes = action.payload
        })
        builder.addCase(addVote.fulfilled, (state, action) => {
            state.doctorVotes = [...state.doctorVotes, action.payload]
        })
        builder.addCase(updateVote.fulfilled, (state, action)=> {
            state.doctorVotes = state.doctorVotes.map(vote => {
                if (vote.id !== action.payload.id) return vote
                else return action.payload
            })
        })
        builder.addCase(deleteVote.fulfilled, (state, action)=> {
            state.doctorVotes = state.doctorVotes.filter(vote => vote.id !== action.payload)
        })
    },
})

export const {} = voteSlice.actions
export default voteSlice.reducer