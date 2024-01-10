import React from "react";
interface ConfirmModalProps {
  type: string;
  closeConfirmModal: Function;
  closeModifyModal: Function;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  type,
  closeConfirmModal,
  closeModifyModal,
}) => {
  return (
    <div className="modal-container">
      <div className="modal confirm-modal">
        <p className="confirm-modal-text">
          {type === "MODIFY"
            ? "Bạn có muốn hủy những thay đổi?"
            : "Xác nhận xóa"}
        </p>
        <button
          className="modal-button"
          onClick={() => {
            closeConfirmModal();
            closeModifyModal();
          }}
        >
          Đồng ý
        </button>
        <button className="modal-button" onClick={closeConfirmModal}>
          Hủy
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
