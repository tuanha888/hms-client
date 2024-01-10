import React from "react";
import { Field } from "../interfaces";
interface DetailProps {
  fields: Field[];
  entity: any;
  closeDetailModal: Function;
}
const Detail: React.FC<DetailProps> = ({
  fields,
  entity,
  closeDetailModal,
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
  return <div>Detail</div>;
};

export default Detail;
