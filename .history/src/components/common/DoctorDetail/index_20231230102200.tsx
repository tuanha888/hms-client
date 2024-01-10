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
  return <div>DoctorDetail</div>;
};

export default DoctorDetail;
