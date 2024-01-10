import { createSlice } from "@reduxjs/toolkit"


export interface Vote {
    id: string,
    patientId: string,
    patientName: string,
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
        
    },
})

export const {} = voteSlice.actions
export default voteSlice.reducer