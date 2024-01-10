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
        <p className="surgery-detail-doctor">
          <span className="modal-field">Bác sĩ:</span>{" "}
          <span>{surgery.doctorName}</span>
        </p>
        <p className="surgery-detail-patient">
          <span className="modal-field">Bệnh nhân:</span>{" "}
          <span onClick={openModal}>{surgery.patientName}</span>
        </p>
        <p className="surgery-detail-day">
          <span className="modal-field">Ngày:</span>{" "}
          <span>{surgery.time.toDateString()}</span>
        </p>
        <p className="surgery-detail-content">
          <span className="modal-field">Nội dung:</span>{" "}
          <span>{surgery.content}</span>
        </p>
        <p className="surgery-detail-expected">
          <span className="modal-field">Thời gian dự kiến:</span>{" "}
          <span>{surgery.expectedTime.getHours()}</span>
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
