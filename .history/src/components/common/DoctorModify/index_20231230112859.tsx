import React from "react";
import { Doctor } from "../../../redux/features/doctorSlice";
import { useModal } from "../../hooks/useModal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
export interface DoctorEdit {
  name: string;
  departmentId: string;
  birthDay: string;
  phoneNumber: string;
  gender: string;
  address: string;
  image?: any;
}
interface DoctorModifyProps {
  doctor: Doctor;
  closeModifyModal: Function;
}
const DateTimeInput = ({ field, form, ...props }) => {
  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={(val) => form.setFieldValue(field.name, val)}
        showTimeSelect
        timeIntervals={15} // Adjust as needed
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
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
    image: "",
  };
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = (values) => {};
  return (
    <div className="modal-container">
      <div className="modal">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <div className="modal-data">
              <label className="modal-label" htmlFor="name">
                Tên
              </label>
              <Field type="text" name="name" className="modal-input" />
            </div>
            <div className="modal-data">
              <label className="modal-label" htmlFor="departmentName">
                Chuyên khoa
              </label>
              <Field
                type="text"
                name="departmentName"
                className="modal-input"
              />
            </div>
            <div className="modal-data">
              <label htmlFor="birthDay" className="modal-label">
                Ngày sinh
              </label>
              <Field
                name="birthDay"
                className="modal-input"
                component={DateTimeInput}
              />
            </div>
            <div className="modal-data">
              <label className="modal-label" htmlFor="phoneNumber">
                Số điện thoại
              </label>
              <Field type="text" name="phoneNumber" className="modal-input" />
            </div>
            <div className="modal-data">
              <label className="modal-label" htmlFor="address">
                Địa chỉ
              </label>
              <Field type="text" name="address" className="modal-input" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default DoctorModify;
