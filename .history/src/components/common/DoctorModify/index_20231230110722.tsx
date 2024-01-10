import React from "react";
import { Doctor } from "../../../redux/features/doctorSlice";
import { useModal } from "../../hooks/useModal";
interface DoctorModifyProps {
  doctor: Doctor;
  closeModifyModal: Function;
}
const DoctorModify: React.FC<DoctorModifyProps> = ({
  doctor,
  closeModifyModal,
}) => {
  const {
    isModalOpen: isConfirmModal,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = useModal();
  const handleCloseModify = () => {
    openConfirmModal();
  };
  const initialValues = {
    name: doctor.name,
    departmentName: doctor.departmentName,
    departmentId: doctor.departmentId,
    birthDay: doctor.birthDay,
    phoneNumber: doctor.phoneNumber,
    address: doctor.address,
  };
  return <div>DoctorModify</div>;
};

export default DoctorModify;
