import React from "react";
import { Medicine as MedicineType } from "../../../redux/features/prescriptionSlice";
import { useModal } from "../../hooks/useModal";
import { Field, InitField } from "../interfaces";
import Modify from "../Modify";
import ConfirmModal from "../ConfirmModal";
import "./Medicine.scss";

interface MedicineProps {
  medicine: MedicineType;
  openEdit: boolean;
  setPres: Function;
}
const Medicine: React.FC<MedicineProps> = ({ medicine, openEdit, setPres }) => {
  const {
    isModalOpen: isOpenModifyModal,
    openModal: openModify,
    closeModal: closeModify,
  } = useModal();
  const {
    isModalOpen: isOpenConfirmModal,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = useModal();
  const fields: Field[] = [
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
  const handleModify = ({ id, value }) => {
    setPres((prev) => {
      const medicines = prev.medicines.map((med) => {
        if (med.id === medicine.id) return value;
        else return med;
      });
      return {
        ...prev,
        medicines,
      };
    });
  };
  const handleDeleteMed = (id) => {
    setPres((prev) => {
      const medicines = prev.medicines.filter((med) => med.id !== id);
      return {
        ...prev,
        medicines,
      };
    });
  };
  return (
    <li className="medicine">
      <div className="medicine-content">
        <p className="medicine-name">Tên: {medicine.name}</p>
        <p className="medicine-quantity">Số lượng: {medicine.quantity}</p>
        <span className="medicine-item">
          Sáng: {medicine.breakfast}{" "}
          {medicine.beforeBreakfast ? "Trước ăn" : "Sau ăn"}
        </span>
        <span className="medicine-item">
          Trưa: {medicine.lunch} {medicine.beforeLunch ? "Trước ăn" : "Sau ăn"}
        </span>
        <span className="medicine-item">
          Tối: {medicine.dinner} {medicine.beforeDinner ? "Trước ăn" : "Sau ăn"}
        </span>
      </div>
      <div className="medicine-edit">
        {openEdit && (
          <>
            <button className="modal-button" onClick={openModify}>
              Sửa
            </button>
            <button
              className="modal-button"
              onClick={() => handleDeleteMed(medicine.id)}
            >
              Xóa
            </button>
          </>
        )}
      </div>
      {isOpenModifyModal && (
        <Modify
          fields={fields}
          entity={medicine}
          closeModifyModal={closeModify}
          handleSubmit={handleModify}
        />
      )}
    </li>
  );
};

export default Medicine;
