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
  closeDetailModal: Function;
  patient: any
}
const CreatePrescription: React.FC<PrescriptionDetailProps> = ({ patient
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
  const [pres, setPres] = useState({
    patientId: patient.id,
    note: "",
    createdDay: new Date(),
    medicines: [],
  });
  const handleModify = ({ id, value }) => {
    setPres((prevState) => ({
      ...prevState,
      note: value.note,
    }));
  };
  const handleAddMed = (values) => {
    setPres((prevState) => {
      const medicines = [...prevState.medicines, values];
      return {
        ...prevState,
        medicines,
      };
    });
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
      fieldName: "patientId",
      fieldValue: ,
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

            <ul className="medicines">{renderMedicines()}</ul>
            {(
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
          entity={pres}
          closeModifyModal={closeModify}
        />
      )}
      {isAddMed && (
        <Create
          fields={medFields}
          initFields={initFields}
          closeCreateModal={closeAddMed}
          handleSubmit={handleAddMed}
        />
      )}
    </>
  );
};

export default CreatePrescription;
