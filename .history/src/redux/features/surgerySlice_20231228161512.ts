
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