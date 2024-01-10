import React from "react";
import { Doctor } from "../../../redux/features/doctorSlice";
import { RootState } from "../../../redux";
import { useSelector } from "react-redux";

interface DoctorDetailProps {
  doctor: Doctor;
  closeDetailModal: Function;
}
const DoctorDetail: React.FC<DoctorDetailProps> = ({
  doctor,
  closeDetailModal,
}) => {
  const role = useSelector((state: RootState) => state.user.user!.role);
  const {
    isModalOpen: isModifyOpen,
    openModal: openModify,
    closeModal: closeModify,
  } = useModal();
  const {
    isModalOpen: isConfirmModal,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = useModal();

  return (
    <div className="doctor-detail modal-container">
      <div className="doctor-detail-modal modal">
        {!isModifyOpen && (
          <>
            <p className="doctor-detail-doctor modal-item">
              <span className="modal-field">Bác sĩ:</span>{" "}
              <span>{doctor.doctorName}</span>
            </p>
            <p className="doctor-detail-patient modal-item">
              <span className="modal-field">Bệnh nhân:</span>{" "}
              <span onClick={openModal}>{doctor.patientName}</span>
            </p>
            <p className="doctor-detail-day modal-item">
              <span className="modal-field">Ngày:</span>{" "}
              <span>{doctor.time.toDateString()}</span>
            </p>
            <p className="doctor-detail-content modal-item">
              <span className="modal-field">Nội dung:</span>{" "}
              <span>{doctor.content}</span>
            </p>
            <p className="doctor-detail-expected modal-item">
              <span className="modal-field">Thời gian dự kiến:</span>{" "}
              <span>{doctor.expectedTime} giờ</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorDetail;
