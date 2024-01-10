import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import "./SurgeryDetail.scss";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import PatientDetail from "../PatientDetail";
interface SurgeryDetailProps {
  surgery: Surgery;
  closeSurgeryModal: Function;
}
const SurgeryDetail: React.FC<SurgeryDetailProps> = ({
  surgery,
  closeSurgeryModal,
}) => {
  const role = useSelector((state: RootState) => state.user.user!.role);
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className="surgery-detail">
      <div className="surgery-detail-modal">
        <p className="surgery-detail-doctor">Bác sĩ: {surgery.doctorName}</p>
        <p className="surgery-detail-patient">
          Bệnh nhân: <span onClick={openModal}>{surgery.patientName}</span>
        </p>
        <p className="surgery-detail-day">
          Ngày: {surgery.time.toDateString()}
        </p>
        <p className="surgery-detail-content">
          Nội dung: {surgery.content} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo provident eius eveniet, pariatur quo quis fuga,
          nesciunt illum illo magni quod, adipisci voluptas officia veritatis
          placeat iure? Placeat, aliquid id.
        </p>
        <p className="surgery-detail-expected">
          Thời gian dự kiến: {surgery.expectedTime.getHours()}
        </p>
        {role === "ADMIN" ? (
          <button className="surgery-detail-modify">Sửa</button>
        ) : (
          ""
        )}
        <FaTimes className="surgery-detail-close" onClick={closeSurgeryModal} />
      </div>
      {isModalOpen && (
        <PatientDetail id={surgery.patientId} closePatientModal={closeModal} />
      )}
    </div>
  );
};

export default SurgeryDetail;
