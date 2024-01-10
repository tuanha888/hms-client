import React, { ReactNode } from "react";
import { Field } from "../interfaces";
import { useModal } from "../../hooks/useModal";
import Detail from "../Detail";
interface OverviewProps {
  fields: Field[];
  entity: any;
}
const Overview: React.FC<OverviewProps> = ({ fields, entity }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const renderEntity = () => {
    const render: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.overviewDisplay)
        if (field.type !== "image")
          render.push(
            <p className="modal-item">
              <span className="modal-field">{field.fieldDisplay}:</span>{" "}
              <span>{entity[field.fieldName]}</span>
            </p>
          );
        else
          render.unshift(
            <div className="overview-img-container">
              <div className="overview-img">
                <img src={entity[field.fieldName]} alt="" />
              </div>
            </div>
          );
    });
    return render;
  };
  return (
    <>
      <li className="overview">{renderEntity()}</li>
      {isModalOpen && (
        <Detail fields={fields} entity={entity} closeDetailModal={closeModal} />
      )}
    </>
  );
};

export default Overview;
