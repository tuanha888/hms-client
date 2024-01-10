import {v4 as uuidv4} from 'uuid'
import { Surgery } from '../features/surgerySlice';

export const getSurgeryAPI = () => {
    const surgeries: Surgery[] = Array.from({ length: 10 }, (_, index) => ({
        id: uuidv4(),
        doctorId: uuidv4(),
        doctorName: `Bác sĩ ${String.fromCharCode(65 + index)}`, // A, B, C, ...
        patientId: uuidv4(),
        patientName: `Nguyễn Văn ${String.fromCharCode(65 + index)}`, // A, B, C, ...
        time: new Date(),
        content: `Nội dung phẫu thuật ${index + 1}`,
        expectedTime: new Date(),
      }));
    return surgeries;
}