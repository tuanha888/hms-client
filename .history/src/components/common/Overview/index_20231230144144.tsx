import React, { ReactNode } from "react";
import { Field } from "../interfaces";
import { useModal } from "../../hooks/useModal";
import Detail from "../Detail";
import "./Overview.scss";
interface OverviewProps {
  fields: Field[];
  entity: any;
  handleDelete: Function | null;
  openDetailEdit: boolean;
}
const Overview: React.FC<OverviewProps> = ({
  fields,
  entity,
  handleDelete,
  openDetailEdit,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const renderEntity = () => {
    const render: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.overviewDisplay)
        if (field.type !== "image")
          render.push(
            <p className="modal-item">
              <span className="modal-field overview-field">
                {field.fieldDisplay}:
              </span>{" "}
              <span>
                {field.type !== "date"
                  ? entity[field.fieldName]
                  : entity[field.fieldName].toDateString()}
              </span>
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
      <li className="overview" onClick={openModal}>
        {renderEntity()}
      </li>
      {isModalOpen && (
        <Detail
          fields={fields}
          entity={entity}
          closeDetailModal={closeModal}
          handleDelete={handleDelete}
          openDetailEdit={openDetailEdit}
        />
      )}
    </>
  );
};

export default Overview;
