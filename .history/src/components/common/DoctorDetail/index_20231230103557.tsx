import React from "react";
import { Doctor } from "../../../redux/features/doctorSlice";
import { RootState } from "../../../redux";
import { useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { FaTimes } from "react-icons/fa";
import ConfirmModal from "../ConfirmModal";

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
  const handleDelete = () => {};
  return (
    <div className="doctor-detail modal-container">
      <div className="doctor-detail-modal modal">
        {!isModifyOpen && (
          <>
            <p className="doctor-detail-doctor modal-item">
              <span className="modal-field">Bác sĩ:</span>{" "}
              <span>{doctor.name}</span>
            </p>
            <p className="doctor-detail-patient modal-item">
              <span className="modal-field">Chuyên khoa:</span>{" "}
              <span>{doctor.departmentName}</span>
            </p>
            <p className="doctor-detail-day modal-item">
              <span className="modal-field">Ngày sinh:</span>{" "}
              <span>{doctor.birthDay.toDateString()}</span>
            </p>
            <p className="doctor-detail-content modal-item">
              <span className="modal-field">Số điện thoại:</span>{" "}
              <span>{doctor.phoneNumber}</span>
            </p>
            <p className="doctor-detail-expected modal-item">
              <span className="modal-field">Giới tính:</span>{" "}
              <span>{doctor.gender == "MALE" ? "Nam" : "Nữ"} </span>
            </p>
            {role === "ADMIN" ? (
              <>
                <button
                  className="doctor-detail-modify modal-button"
                  onClick={openModify}
                >
                  Sửa
                </button>
                <button
                  className="doctor-detail-delete modal-button"
                  onClick={openConfirmModal}
                >
                  Xóa
                </button>
              </>
            ) : (
              ""
            )}
          </>
        )}
        <FaTimes
          className="surgery-detail-close modal-close"
          onClick={closeDetailModal}
        />
      </div>
      {isConfirmModal && (
        <ConfirmModal
          type="DELETE"
          closeConfirmModal={closeConfirmModal}
          closeModifyModal={null}
          deleteFunction={handleDelete}
        />
      )}
    </div>
  );
};

export default DoctorDetail;
