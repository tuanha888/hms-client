import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import "./SurgeryDetail.scss";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import PatientDetail from "../PatientDetail";
import ModifySurgery from "../ModifySurgery";
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
  const {
    isModalOpen: isModifySurgeryOpen,
    openModal: openModifySurgery,
    closeModal: closeModifySurgery,
  } = useModal();
  return (
    <div className="surgery-detail">
      <div className="surgery-detail-modal">
        {!isModifySurgeryOpen && (
          <>
            <p className="surgery-detail-doctor modal-item">
              <span className="modal-field">Bác sĩ:</span>{" "}
              <span>{surgery.doctorName}</span>
            </p>
            <p className="surgery-detail-patient modal-item">
              <span className="modal-field">Bệnh nhân:</span>{" "}
              <span onClick={openModal}>{surgery.patientName}</span>
            </p>
            <p className="surgery-detail-day modal-item">
              <span className="modal-field">Ngày:</span>{" "}
              <span>{surgery.time.toDateString()}</span>
            </p>
            <p className="surgery-detail-content modal-item">
              <span className="modal-field">Nội dung:</span>{" "}
              <span>{surgery.content}</span>
            </p>
            <p className="surgery-detail-expected modal-item">
              <span className="modal-field">Thời gian dự kiến:</span>{" "}
              <span>{surgery.expectedTime} giờ</span>
            </p>
            {role === "ADMIN" ? (
              <button
                className="surgery-detail-modify"
                onClick={openModifySurgery}
              >
                Sửa
              </button>
            ) : (
              ""
            )}
            <FaTimes
              className="surgery-detail-close"
              onClick={closeSurgeryModal}
            />
          </>
        )}
      </div>
      {isModalOpen && (
        <PatientDetail id={surgery.patientId} closePatientModal={closeModal} />
      )}
      {isModifySurgeryOpen && (
        <ModifySurgery
          surgery={surgery}
          closeModifyModal={closeModifySurgery}
        />
      )}
    </div>
  );
};

export default SurgeryDetail;
