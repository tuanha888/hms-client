import { createSlice } from "@reduxjs/toolkit"
import { createDoctor, getDoctors, updateDoctor } from "../actions/doctor-actions"


export interface Doctor {
    id: string,
    name: string,
    address: string,
    departmentId: string,
    departmentName: string,
    birthDay: Date,
    phoneNumber: string,
    gender: string,
    image: string,
    rating: number
}

const initValues : {
    doctors: Doctor[]
} = {
    doctors: []
}

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState: initValues,
    reducers: {
        setDoctors: (state, action) => {
            state.doctors = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getDoctors.fulfilled, (state, action)=> {
            const doctors = action.payload
            const newDoctors = doctors.map(doctor => {
                return {
                    ...doctor,
                    phoneNumber: doctor.phoneNumber.replace('84', '0')
                }
            })
            state.doctors = action.payload
        })
        builder.addCase(createDoctor.fulfilled, (state, action) => {
            
        })
        builder.addCase(updateDoctor.fulfilled, (state, action) =>{
            
        })
    },
})

export const {} = doctorSlice.actions
export default doctorSlice.reducer