import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import { Field, Form, Formik } from "formik";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import "./ModifySurgery.scss";
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
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (values) => {};
  return (
    <div className="modal-container">
      <div className="modal">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleChange(values)}
        >
          <Form>
            <label className="modal-label" htmlFor="doctorName">
              Bác sĩ
            </label>
            <Field
              type="text"
              id="doctorName"
              name="doctorName"
              className="modal-input"
            />
          </Form>
        </Formik>
        <FaTimes className="modal-close" onClick={closeModifyModal} />
      </div>
    </div>
  );
};

export default ModifySurgery;
