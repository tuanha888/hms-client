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
import { registerLocale, setDefaultLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "./Modify.scss";
import AutoComplete from "../AutoComplete";
interface ModifyProps {
  fields: Field[];
  entity: any;
  closeModifyModal: Function;
  handleSubmit: Function;
  handleDelete: Function;
}
// Import Vietnamese locale from date-fns

// Register the Vietnamese locale globally
registerLocale("vi", vi);

// Set default locale for react-datepicker
setDefaultLocale("vi");

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
        dateFormat="dd/MM/yyyy HH:mm"
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
        dateFormat="dd/MM/yyyy"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
const Modify: React.FC<ModifyProps> = ({
  fields,
  entity,
  closeModifyModal,
  handleDelete,
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
    // Initialize based on existing values for update operation
    initialValues[field.fieldName] = entity[field.fieldName];
  });
  const handleScale = (textarea) => {
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto to correctly calculate scroll height
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
  const handleEnter = () => {
    document.querySelectorAll(".autoScaleTextarea").forEach(handleScale);
  };
  const imagePicker = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const renderField = (setFieldValue) => {
    const renderFields: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.modifyDisplay) {
        if (field.type === "text") {
          if (field.choosen !== null) {
            // const renderChoosen = () => {
            //   return field.choosen.map((item: any) => {
            //     return (
            //       <li
            //         className="choosen-item"
            //         key={item.id}
            //         onClick={() => {
            //           console.log(field.fieldName, item.name);
            //           setFieldValue(field.fieldName, item.name);
            //           setFieldValue(
            //             field.fieldName.replace("Name", "Id"),
            //             item.id
            //           );
            //         }}
            //         onMouseDown={(e) => {
            //           // Prevent the input from losing focus
            //           e.preventDefault();
            //         }}
            //       >
            //         {item.name}
            //       </li>
            //     );
            //   });
            // };
            // renderFields.push(
            //   <div className="modal-data modal-modify-choosen">
            //     <label className="modal-label" htmlFor={field.fieldName}>
            //       {field.fieldDisplay}
            //     </label>
            //     <FieldForm
            //       type="text"
            //       name={field.fieldName}
            //       className="modal-input"
            //     />
            //     <div className="choosen-container">
            //       <ul className="choosen">{renderChoosen()}</ul>
            //     </div>
            //   </div>
            // );
            renderFields.push(
              <AutoComplete
                field={field}
                choosen={field.choosen}
                setFieldValue={setFieldValue}
                fieldValue={entity[field.fieldName]}
              />
            );
          } else
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
        } else if (field.type === "textarea") {
          renderFields.push(
            <div className="modal-data">
              <label htmlFor={field.fieldName} className="modal-label">
                {field.fieldDisplay}
              </label>
              <FieldForm
                as="textarea"
                name={field.fieldName}
                className="modal-input autoScaleTextarea"
                onInput={handleScale(this)}
                onKeyDown={handleEnter}
              />
            </div>
          );
        } else if (field.type === "boolean") {
          renderFields.push(
            <div className="modal-data">
              <label className="modal-label" htmlFor={field.fieldName}>
                {field.fieldDisplay}
              </label>
              <FieldForm
                type="checkbox"
                name={field.fieldName}
                component="input" // Specify the component as "input" for checkbox
              />
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
      handleSubmit({
        id: entity.id,
        data: formData,
      });
    } else
      handleSubmit({
        id: entity.id,
        data: values,
      });
  };
  return (
    <div className="modify modal-container">
      <div className="modal-wrapper">
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
