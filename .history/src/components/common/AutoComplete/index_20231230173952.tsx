import { ErrorMessage, Field } from "formik";
import { useState } from "react";

const AutoComplete = ({ field, choosen, fieldValue, setFieldValue }) => {
  const [inputValue, setInputValue] = useState(field.);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Additional filtering logic if needed
  };

  const renderOptions = () => {
    const filteredChoosen = choosen.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return filteredChoosen.map((item) => (
      <li
        className="choosen-item"
        key={item.id}
        onClick={() => {
          console.log(field.fieldName, item.name);
          setFieldValue(field.fieldName, item.name);
          setFieldValue(field.fieldName.replace("Name", "Id"), item.id);
          setInputValue(item.name);
        }}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        {item.name}
      </li>
    ));
  };

  return (
    <div className="modal-data modal-modify-choosen">
      <label className="modal-label" htmlFor={field.fieldName}>
        {field.fieldDisplay}
      </label>
      <Field
        type="text"
        name={field.fieldName}
        className="modal-input"
        onChange={handleChange}
        value={inputValue}
      />
      <ErrorMessage name={field.fieldName} component="div" className="error" />
      <div className="choosen-container">
        <ul className="choosen">{renderOptions()}</ul>
      </div>
    </div>
  );
};

export default AutoComplete;
