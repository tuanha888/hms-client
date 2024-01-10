import { ErrorMessage, Field } from "formik";
import { useState } from "react";

const AutoComplete = ({ field, choosen, fieldValue, setFieldValue }) => {
  const [inputValue, setInputValue] = useState(fieldValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Determine if inputValue contains a number
    const containsNumber = /\d/.test(value);

    // Update filtering logic based on containsNumber
    const filteredChoosen = choosen.filter((item) =>
      containsNumber
        ? item?.phoneNumber.includes(value)
        : item.name.toLowerCase().includes(value.toLowerCase())
    );

    // Additional filtering logic if needed

    // Rest of the code remains the same

    renderOptions(filteredChoosen); // Call renderOptions here or set filteredChoosen in state if needed
  };

  const renderOptions = (filteredChoosen) => {
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
