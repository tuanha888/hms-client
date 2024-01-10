import React from "react";
import { Medicine } from "../../../redux/features/prescriptionSlice";
interface MedicineProps {
  medicine: Medicine;
  openEdit: boolean;
}
const Medicine: React.FC<MedicineProps> = ({ medicine, openEdit }) => {
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
    </li>
  );
};

export default Medicine;
