
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
    note: string
}

const initValues: {
    medicalRecord: MedicalRecord;
} = {
    medicalRecord: 
};
