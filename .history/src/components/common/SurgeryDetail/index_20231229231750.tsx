import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import "./SurgeryDetail.scss";
interface SurgeryDetailProps {
  surgery: Surgery;
  closeModal: Function;
}
const SurgeryDetail: React.FC<SurgeryDetailProps> = ({
  surgery,
  closeModal,
}) => {
  return (
    <div className="surgery-detail">
      <div className="surgery-detail-modal">
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
        <button className="surgery-detail-modify">Sửa</button>
        <FaTimes className="login-close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default SurgeryDetail;
