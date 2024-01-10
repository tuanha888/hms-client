import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
import { Field, Form, Formik } from "formik";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
            <div className="modal-data">
              <label className="modal-label" htmlFor="doctorName">
                Bác sĩ
              </label>
              <Field type="text" name="doctorName" className="modal-input" />
            </div>
            <div className="modal-data">
              <label className="modal-label" htmlFor="patientName">
                Bệnh nhân
              </label>
              <Field type="text" name="patientName" className="modal-input" />
            </div>
            <div className="modal-data">
              <label htmlFor="time" className="modal-label">
                Thời gian
              </label>
              <Field name="time" className="modal-input">
                {({ field, form }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => form.setFieldValue("time", date)}
                  />
                )}
              </Field>
            </div>
            <div className="modal-data"></div>
          </Form>
        </Formik>
        <FaTimes className="modal-close" onClick={closeModifyModal} />
      </div>
    </div>
  );
};

export default ModifySurgery;
