import { ReactNode } from "react";
import { useModal } from "../../../hooks/useModal";
import "../../Detail/Detail.scss";
import { Field } from "../../interfaces";
import { FaTimes } from "react-icons/fa";
import Modify from "../../Modify";
import ConfirmModal from "../../ConfirmModal";
import "./PatientDetail.scss";
import Prescriptions from "../../Prescriptions";
import MedicalRecords from "../../MedicalRecords";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
interface DetailProps {
  fields: Field[];
  entity: any;
  closeDetailModal: Function;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
  id: string | null;
}
const PatientDetail: React.FC<DetailProps> = ({
  fields,
  entity,
  closeDetailModal,
  handleDelete,
  openDetailEdit,
  id,
}) => {
  const {
    isModalOpen: isModifyOpen,
    openModal: openModify,
    closeModal: closeModify,
  } = useModal();
  const {
    isModalOpen: isConfirmModal,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = useModal();
  const {
    isModalOpen: isPrescriptionModal,
    openModal: openPrescriptionModal,
    closeModal: closePrescriptinModal,
  } = useModal();
  const {
    isModalOpen: isMedicalRecordModal,
    openModal: openMedicalRecordModal,
    closeModal: closeMedicalRecordModal,
  } = useModal();
  entity =
    entity === null &&
    id !== null &&
    useSelector((state: RootState) =>
      state.patient.patients.filter((patient) => patient.id === id)
    )[0];
  const renderEntity = () => {
    const render: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.detailDisplay)
        if (field.type !== "image")
          render.push(
            <p className="modal-item">
              <span className="modal-field">{field.fieldDisplay}:</span>{" "}
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
    <div className="detail modal-container">
      {!isModifyOpen && (
        <div className="modal-wrapper">
          <div className="detail-modal modal">
            {renderEntity()}
            {openDetailEdit && (
              <div className="patient-button-container">
                <button
                  className="modal-button patient-button"
                  onClick={openModify}
                >
                  Sửa
                </button>
                <button
                  className="modal-button patient-button"
                  onClick={openConfirmModal}
                >
                  Xóa
                </button>
                <button
                  className="modal-button patient-button"
                  onClick={openModify}
                >
                  Thêm bệnh án
                </button>
                <button
                  className="modal-button patient-button"
                  onClick={openConfirmModal}
                >
                  Thêm đơn thuốc
                </button>
                <button
                  className="modal-button patient-button"
                  onClick={openMedicalRecordModal}
                >
                  Xem bệnh án
                </button>
                <button
                  className="modal-button patient-button"
                  onClick={openPrescriptionModal}
                >
                  Xem đơn thuốc
                </button>
              </div>
            )}
            <FaTimes className="modal-close" onClick={closeDetailModal} />
          </div>
        </div>
      )}
      {isModifyOpen && (
        <Modify
          fields={fields}
          entity={entity}
          closeModifyModal={closeModify}
        />
      )}
      {isConfirmModal && (
        <ConfirmModal
          type="DELETE"
          closeConfirmModal={closeConfirmModal}
          closeModifyModal={null}
          deleteFunction={handleDelete}
        />
      )}
      {isPrescriptionModal && (
        <div className="modal-container">
          <div className="modal-wrapper">
            <div className="modal layout">
              <Prescriptions id={entity.id} />
              <FaTimes
                className="modal-close"
                onClick={closePrescriptinModal}
              />
            </div>
          </div>
        </div>
      )}
      {isMedicalRecordModal && (
        <div className="modal-container">
          <div className="modal-wrapper">
            <div className="modal layout">
              <MedicalRecords id={entity.id} />
              <FaTimes
                className="modal-close"
                onClick={closeMedicalRecordModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
