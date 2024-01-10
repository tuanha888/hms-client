import React from "react";
import { Doctor as DoctorV2 } from "../../../redux/features/doctorSlice";
import "./Doctor.scss";
import { useModal } from "../../hooks/useModal";
interface DoctorProps {
  doctor: any;
}
const Doctor: React.FC<DoctorProps> = ({ doctor }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <li className="doctor-item">
        <div className="doctor-img-container">
          <div className="doctor-img">
            <img src={doctor.image} alt="" />
          </div>
        </div>
        <div className="doctor-content">
          <p className="doctor-name modal-item">
            <span className="modal-field">Bác sĩ:</span>{" "}
            <span>{doctor.name}</span>
          </p>
          <p className="doctor-department modal-item">
            <span>{doctor.departmentName}</span>
          </p>
          <p className="doctor-rating modal-item">
            <span className="modal-field">Đánh giá:</span>{" "}
            <span>{doctor.rating}</span>
          </p>
        </div>
      </li>
    </>
  );
};

export default Doctor;
