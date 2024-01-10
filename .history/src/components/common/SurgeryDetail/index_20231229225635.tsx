import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
interface SurgeryDetailProps {
  surgery: Surgery;
}
const SurgeryDetail: React.FC<SurgeryDetailProps> = ({ surgery }) => {
  return (
    <div className="surgery-detail">
      <span className="surgery-detail-doctor">
        Bác sĩ: {surgery.doctorName}
      </span>
      <span className="surgery-detail-patient">
        Bệnh nhân: {surgery.patientName}
      </span>
      <span className="surgery-detail-day">
        Ngày: {surgery.time.toDateString()}
      </span>
      <span className="surgery-detail-content">
        Nội dung: {surgery.content}
      </span>
      <span className="surgery-detail-expected">
        Thời gian dự kiến: {surgery.expectedTime.getHours()}
      </span>
    </div>
  );
};

export default SurgeryDetail;
