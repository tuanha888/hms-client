import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { useModal } from "../../hooks/useModal";
import PatientDetail from "../Patient/PatientDetail";
import { doctorFields, patientFields } from "../../utils/constants";
import DoctorDetail from "../Doctors/DoctorDetail";
interface ViewDetailProps {
  patientId: string | null;
  doctorId: string | null;
}
const ViewDetail: React.FC<ViewDetailProps> = ({ patientId, doctorId }) => {
  const entity =
    patientId !== null
      ? useSelector((state: RootState) =>
          state.patient.patients.filter((patient) => patient.id === patientId)
        )[0]
      : useSelector((state: RootState) =>
          state.doctor.doctors.filter((doctor) => doctor.id === doctorId)
        )[0];
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <span
        onClick={openModal}
        style={{ cursor: "pointer", ":hover": "#1876f2" }}
      >
        {entity.name}
      </span>
      {isModalOpen && patientId !== null && (
        <PatientDetail entity={entity} fields={patientFields} id={null} />
      )}
      {isModalOpen && doctorId !== null && (
        <DoctorDetail
          fields={doctorFields}
          entity={entity}
          closeDetailModal={closeModal}
          id={null}
        />
      )}
    </>
  );
};

export default ViewDetail;
