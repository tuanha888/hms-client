import React, { useState } from "react";
import { Field, InitField } from "../interfaces";
import { Prescription } from "../../../redux/features/prescriptionSlice";
import Medicine from "../Medicine";
import { useModal } from "../../hooks/useModal";
import { v4 as uuidv4 } from "uuid";
import { FaTimes } from "react-icons/fa";
import Modify from "../Modify";
import Create from "../Create";

interface PrescriptionDetailProps {
  prescription: Prescription;
  closeDetailModal: Function;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
}
const PrescriptionDetail: React.FC<PrescriptionDetailProps> = ({
  prescription: pres,
  closeDetailModal,
  handleDelete,
  handleSubmit,
  openDetailEdit,
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
    isModalOpen: isAddMed,
    closeModal: closeAddMed,
    openModal: openAddMed,
  } = useModal();
  const medFields: Field[] = [
    {
      fieldName: "name",
      fieldDisplay: "Tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "quantity",
      fieldDisplay: "Số lượng",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "breakfast",
      fieldDisplay: "Sáng",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "beforeBreakfast",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
      viewDetail: null,
    },
    {
      fieldName: "lunch",
      fieldDisplay: "Trưa",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "beforeLunch",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
      viewDetail: null,
    },
    {
      fieldName: "dinner",
      fieldDisplay: "Tối",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "beforeDinner",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
      viewDetail: null,
    },
    {
      fieldName: "prescriptionId",
      fieldDisplay: "Trước ăn",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "boolean",
      viewDetail: null,
    },
  ];
  const [prescription, setPres] = useState({
    patientId: pres.patientId,
    note: pres.note,
    createdDay: pres.createdDay,
    medicines: pres.medicines,
  });
  const handleModify = ({ id, value }) => {
    setPres((prevState) => ({
      ...prevState,
      note: value.note,
    }));
  };
  const fields: Field[] = [
    {
      fieldName: "note",
      fieldDisplay: "Ghi chú",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: true,
      choosen: null,
      type: "textarea",
      viewDetail: null,
    },
  ];
  const initFields: InitField[] = [
    {
      fieldName: "id",
      fieldValue: uuidv4(),
    },
    {
      fieldName: "prescriptionId",
      fieldValue: pres.id,
    },
  ];
  const renderMedicines = () => {
    return prescription.medicines.map((medicine) => {
      return (
        <Medicine
          medicine={medicine}
          openEdit={openDetailEdit}
          setPres={setPres}
        />
      );
    });
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal">
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Bệnh nhân:</span>{" "}
              <span>{pres.patientName}</span>
            </p>
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Bác sĩ:</span>{" "}
              <span>{pres.doctorName}</span>
            </p>
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Ngày tạo:</span>{" "}
              <span>
                {prescription.createdDay.toLocaleDateString("vi", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </p>
            <ul className="medicines">{renderMedicines()}</ul>
            {openDetailEdit && (
              <button className="modal-button" onClick={openAddMed}>
                Thêm thuốc
              </button>
            )}
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Lưu ý:</span>{" "}
              <span>{prescription.note}</span>
            </p>
            <FaTimes className="modal-close" onClick={closeDetailModal} />
            {openDetailEdit && (
              <>
                <button className="modal-button" onClick={openModify}>
                  Thay đổi
                </button>
                <button className="modal-button" onClick={openConfirmModal}>
                  Xóa
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {isModifyOpen && (
        <Modify
          fields={fields}
          handleSubmit={handleModify}
          entity={prescription}
          closeModifyModal={closeModify}
        />
      )}
      {isAddMed && (
        <Create
          fields={medFields}
          initFields={initFields}
          closeCreateModal={closeAddMed}
          handleSubmit={null}
        />
      )}
    </>
  );
};

export default PrescriptionDetail;
