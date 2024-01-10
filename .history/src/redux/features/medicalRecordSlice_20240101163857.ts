import { createSlice } from "@reduxjs/toolkit";
import { getMedicalRecord } from "../actions/medicalRecord-actions";
import { TreatmentPlan } from "./treatmentPlanSlice";

export interface MedicalRecord {
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
    },
})
export const {} = medicalRecordSlice.actions
export default medicalRecordSlice.reducer