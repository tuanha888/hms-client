import { ReactNode } from "react";
import { useModal } from "../../hooks/useModal";
import { Prescription } from "../../../redux/features/prescriptionSlice";

interface AppoinmentProps {
  prescription: Prescription;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
  role: "DOCTOR" | "PATIENT";
}
const Prescription: React.FC<AppoinmentProps> = ({
  prescription,
  handleDelete,
  openDetailEdit,
  handleSubmit,
  role,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const renderEntity = () => {
    const render: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.overviewDisplay)
        if (field.type !== "image")
          render.push(
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">
                {field.fieldDisplay}:
              </span>{" "}
              <span>
                {!field.type.includes("date")
                  ? entity[field.fieldName]
                  : entity[field.fieldName].toLocaleDateString("vi", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
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
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Bệnh nhân:</span>{" "}
          <span>{prescription.patientName}</span>
        </p>
      </li>
      {isModalOpen && (
        <AppointmentDetail
          fields={fields}
          entity={entity}
          closeDetailModal={closeModal}
          handleDelete={handleDelete}
          openDetailEdit={role === "DOCTOR" ? false : true}
          handleSubmit={handleSubmit}
          role={role}
        />
      )}
    </>
  );
};
export default Prescription;
