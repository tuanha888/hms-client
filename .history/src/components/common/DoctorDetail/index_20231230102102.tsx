import React from "react";
import { Doctor } from "../../../redux/features/doctorSlice";

interface DoctorDetailProps {
  doctor: Doctor;
  closeDetailModal: Function;
}
const DoctorDetail: React.FC<DoctorDetailProps> = ({
  doctor,
  closeDetailModal,
}) => {
  return <div>DoctorDetail</div>;
};

export default DoctorDetail;
