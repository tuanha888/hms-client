import React from "react";
interface ConfirmModalProps {
  type: string;
  closeConfirmModal: Function;
  closeModifyModal: Function;
}
const ConfirmModal = () => {
  return (
    <div className="modal-container">
      <div className="modal confirm-modal">
        <p className="confirm-modal-text">Bạn có muốn hủy những thay đổi?</p>
        <button className="modal-button">Đồng ý</button>
        <button className="modal-button">Hủy</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
