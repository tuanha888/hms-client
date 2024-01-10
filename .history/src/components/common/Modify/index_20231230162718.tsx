import React, { ReactNode, useRef } from "react";
import { Field } from "../interfaces";
import { useModal } from "../../hooks/useModal";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field as FieldForm, Form, Formik } from "formik";
import { FaImages, FaTimes } from "react-icons/fa";
import ConfirmModal from "../ConfirmModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Modify.scss";
interface ModifyProps {
  fields: Field[];
  entity: any;
  closeModifyModal: Function;
  handleSubmit: Function | null;
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
const DateDayInput = ({ field, form, ...props }) => {
  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={(val) => form.setFieldValue(field.name, val)}
        dateFormat="MMMM d, yyyy"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
const Modify: React.FC<ModifyProps> = ({
  fields,
  entity,
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
  let initialValues: any = {};
  fields.forEach((field) => {
    console.log(field.fieldName);
    initialValues[field.fieldName] = entity[field.fieldName];
  });
  const imagePicker = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const renderField = (setFieldValue) => {
    const renderFields: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.modifyDisplay) {
        if (field.type === "text") {
          renderFields.push(
            <div className="modal-data">
              <label className="modal-label" htmlFor={field.fieldName}>
                {field.fieldDisplay}
              </label>
              <FieldForm
                type="text"
                name={field.fieldName}
                className="modal-input"
              />
            </div>
          );
        } else if (field.type === "datetime") {
          renderFields.push(
            <div className="modal-data">
              <label htmlFor={field.fieldName} className="modal-label">
                {field.fieldDisplay}
              </label>
              <FieldForm
                name={field.fieldName}
                className="modal-input"
                component={DateTimeInput}
              />
            </div>
          );
        } else if (field.type === "dateday") {
          renderFields.push(
            <div className="modal-data">
              <label htmlFor={field.fieldName} className="modal-label">
                {field.fieldDisplay}
              </label>
              <FieldForm
                name={field.fieldName}
                className="modal-input"
                component={DateDayInput}
              />
            </div>
          );
        } else if (field.type === "image") {
          renderFields.unshift(
            <div className="modal-data">
              <div className="overview-img-container modify-image-container">
                <label
                  htmlFor="get-image"
                  className="modal-label image-picker"
                  ref={imagePicker}
                >
                  <FaImages />
                </label>
                <div className="overview-img ">
                  <img src={entity[field.fieldName]} alt="" />
                </div>
              </div>

              <input
                type="file"
                name="get-image"
                id="get-image"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    setFieldValue(field.fieldName, event.target.files[0]);
                    (imagePicker.current! as any).classList.add("is-actived");
                  }
                }}
                style={{ display: "none" }}
              ></input>
            </div>
          );
        }
      }
    });
    return renderFields;
  };
  const handleSubmit = (values) => {
    if (fields.some((field) => field.type === "image")) {
      const formData = new FormData();
      fields.forEach((field) => {
        if (field.type !== "image")
          formData.append(field.fieldName, values[field.fieldName]);
        else if (values[field.fieldName])
          formData.append(field.fieldName, values[field.fieldName]);
      });
    }
  };
  return (
    <div className="modify modal-container">
      <div className="modal modify-modal">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ setFieldValue }) => (
            <Form>
              {renderField(setFieldValue)}
              <button type="submit" className="modal-button">
                Thay đổi
              </button>
              <button
                type="button"
                className="modal-button"
                onClick={() => handleCloseModify()}
              >
                Hủy
              </button>
            </Form>
          )}
        </Formik>
        <FaTimes className="modal-close" onClick={handleCloseModify} />
      </div>
      {isConfirmModal && (
        <ConfirmModal
          type="MODIFY"
          closeConfirmModal={closeConfirmModal}
          closeModifyModal={closeModifyModal}
          deleteFunction={null}
        />
      )}
    </div>
  );
};

export default Modify;
