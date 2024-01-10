import { createSlice } from "@reduxjs/toolkit"

export interface Surgery {
    id: string,
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    time: Date,
    content: string,
    expectedTime: Date
}

const initValues : {
    surgeries: Surgery[],
    doctorSurgeries: Surgery[]
} = {
    surgeries: [],
    doctorSurgeries: []
}

export const surgerySlice = createSlice({
    name: 'surgery',
    initialState: initValues,
    reducers: {
        setSurgeries: (state, action) => {
            state.surgeries = action.payload
        },
        setDoctorSurgeries: (state, action)=> {
            state.doctorSurgeries = action.payload
        }
    },
    extraReducers(builder) {
        
    },
})

export const {setDoctorSurgeries, setSurgeries}= surgerySlice.actions
export default surgerySlice.reducer