import { createSlice } from "@reduxjs/toolkit";
import { createMedicalRecord, deleteMedicalRecord, getMedicalRecord, getMedicalRecordOfPatients, updateMedicalRecord } from "../actions/medicalRecord-actions";
import { TreatmentPlan } from "./treatmentPlanSlice";

export interface MedicalRecord {
    id: string
    doctorId: string,
    doctorName: string,
    patientId: string,
    patientName: string,
    departmentId: string,
    departmentName: string,
    BHYTCode: string,
    inDay: Date,
    outDay: Date,
    inDayDiagnose: string,
    outDayDiagnose: string,
    medicalHistory: string,
    diseaseProgress: string,
    testResults: string,
    hospitalDischargeStatus: string,
    stayType: string,
    note: string,
    treatmentPlan: TreatmentPlan | null
}

const initValues: {
    medicalRecord: MedicalRecord | null;
    medicalRecords: MedicalRecord[]
} = {
    medicalRecord: null,
    medicalRecords: []
};

export const medicalRecordSlice = createSlice({
    name: 'medicalRecord',
    initialState: initValues,
    reducers: {
        setMedicalRecord: (state, action)=> {
            state.medicalRecord = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getMedicalRecord.fulfilled, (state, action)=> {
            
        })
        builder.addCase(getMedicalRecordOfPatients.fulfilled, (state, action) => {
            state.medicalRecords = action.payload
        })
        builder.addCase(createMedicalRecord.fulfilled, (state, action) => {
            state.medicalRecords = [...state.medicalRecords, action.payload]
        })
        builder.addCase(updateMedicalRecord.fulfilled, (state, action) => {
            state.medicalRecords = state.medicalRecords.map(medical => {
                if (medical.id !== action.payload.id) return medical
                else return action.payload
            })
        })
        builder.addCase(deleteMedicalRecord.fulfilled, (state, action) => {
            state.medicalRecords = state.medicalRecords.filter(medical => medical.id !== action.payload)
        })
    },
})
export const {} = medicalRecordSlice.actions
export default medicalRecordSlice.reducer