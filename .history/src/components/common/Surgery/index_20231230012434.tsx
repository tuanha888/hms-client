import React, { useState } from "react";
import { Surgery as SurgeryV2 } from "../../../redux/features/surgerySlice";
// import { Surgery as SurgeryProps } from "../../../redux/features/surgerySlice";
import "./Surgery.scss";
import SurgeryDetail from "../SurgeryDetail";
import { useModal } from "../../hooks/useModal";
interface SurgeryProps {
  surgery: SurgeryV2;
}
const Surgery: React.FC<SurgeryProps> = ({ surgery }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <li className="surgery-item" key={surgery.id} onClick={openModal}>
        <p className="surgery-item-doctor modal-item">
          <span className="modal-field">Bác sĩ:</span>{" "}
          <span>{surgery.doctorName}</span>
        </p>
        <p className="surgery-item-patient modal-item">
          <span className="modal-field">Bệnh nhân:</span>{" "}
          <span onClick={openModal}>{surgery.patientName}</span>
        </p>
        <p className="surgery-item-day modal-item">
          <span className="modal-field">Ngày:</span>{" "}
          <span>{surgery.time.toDateString()}</span>
        </p>
        <p className="surgery-item-content modal-item">
          <span className="modal-field">Nội dung:</span>{" "}
          <span>{surgery.content}</span>
        </p>
        <p className="surgery-item-expected modal-item">
          <span className="modal-field">Thời gian dự kiến:</span>{" "}
          <span>{surgery.expectedTime}</span>
        </p>
      </li>
      {isModalOpen && (
        <SurgeryDetail surgery={surgery} closeSurgeryModal={closeModal} />
      )}
    </>
  );
};

export default Surgery;
