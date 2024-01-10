import React from "react";
import { Field } from "../interfaces";
interface OverviewProps {
  fields: Field[];
  entity: any;
}
const Overview: React.FC<OverviewProps> = ({ fields, entity }) => {
  const renderEntity = () => {
    const render = [];
    return fields.map((field) => {
      if (field.overviewDisplay)
        if (field.type !== "image")
          return render.push(
            <p className="modal-item">
              <span className="modal-field">{field.fieldDisplay}:</span>{" "}
              <span>{entity[field.fieldName]}</span>
            </p>
          );
    });
  };
  return <li className="overview"></li>;
};

export default Overview;
