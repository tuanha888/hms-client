import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import { Formik } from "formik";
interface ModifySurgeryProps {
  surgery: Surgery;
  closeModifyModal: Function;
}
const ModifySurgery: React.FC<ModifySurgeryProps> = ({
  surgery,
  closeModifyModal,
}) => {
  const initialValues = {
    doctorName: surgery.doctorName,
    patientName: surgery.patientName,
    doctorId: surgery.doctorId,
    patientId: surgery.patientId,
    expectedTime: surgery.expectedTime,
    content: surgery.content,
    time: surgery.time,
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <Formik></Formik>
      </div>
    </div>
  );
};

export default ModifySurgery;
