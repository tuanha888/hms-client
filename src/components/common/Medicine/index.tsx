import React from "react";
import { Medicine as MedicineType } from "../../../redux/features/prescriptionSlice";
import { useModal } from "../../hooks/useModal";
import { Field } from "../interfaces";
import Modify from "../Modify";
import ConfirmModal from "../ConfirmModal";
import "./Medicine.scss";
interface MedicineProps {
  medicine: MedicineType;
  openEdit: boolean;
}
const Medicine: React.FC<MedicineProps> = ({ medicine, openEdit }) => {
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
    },
    {
      fieldName: "quantity",
      fieldDisplay: "Số lượng",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "breakfast",
      fieldDisplay: "Sáng",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "beforeBreakfast",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
    },
    {
      fieldName: "lunch",
      fieldDisplay: "Trưa",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "beforeLunch",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
    },
    {
      fieldName: "dinner",
      fieldDisplay: "Tối",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "beforeDinner",
      fieldDisplay: "Trước ăn",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "boolean",
    },
  ];
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
            <button className="modal-button" onClick={openConfirmModal}>
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
        />
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          type="DELETE"
          closeConfirmModal={closeConfirmModal}
          closeModifyModal={null}
          deleteFunction={handleDelete}
        />
      )}
    </li>
  );
};

export default Medicine;
