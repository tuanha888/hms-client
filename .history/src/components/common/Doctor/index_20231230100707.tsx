import React from "react";
import { Doctor as DoctorV2 } from "../../../redux/features/doctorSlice";
import "./Doctor.scss";
interface DoctorProps {
  doctor: any;
}
const Doctor: React.FC<DoctorProps> = ({ doctor }) => {
  return (
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
          <span className="modal-field">Chuyên khoa:</span>{" "}
          <span>{doctor.departmentName}</span>
        </p>
        <p className="doctor-rating modal-item">
          <span className="modal-field">Đánh giá:</span>{" "}
          <span>{doctor.rating}</span>
        </p>
      </div>
    </li>
  );
};

export default Doctor;
