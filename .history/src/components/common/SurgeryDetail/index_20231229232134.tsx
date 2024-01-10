import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import "./SurgeryDetail.scss";
import { FaTimes } from "react-icons/fa";
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
        <p className="surgery-detail-doctor">Bác sĩ: {surgery.doctorName}</p>
        <p className="surgery-detail-patient">
          Bệnh nhân: <span>{surgery.patientName}</span>
        </p>
        <p className="surgery-detail-day">
          Ngày: {surgery.time.toDateString()}
        </p>
        <p className="surgery-detail-content">Nội dung: {surgery.content}</p>
        <p className="surgery-detail-expected">
          Thời gian dự kiến: {surgery.expectedTime.getHours()}
        </p>
        <button className="surgery-detail-modify">Sửa</button>
        <FaTimes className="surgery-detail-close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default SurgeryDetail;
