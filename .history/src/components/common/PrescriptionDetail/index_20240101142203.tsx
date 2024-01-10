import React from "react";
import { Field } from "../interfaces";

interface PrescriptionDetailProps {
  fields: Field[];
  entity: any;
  closeDetailModal: Function;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
}
const PrescriptionDetail: React.FC<PrescriptionDetailProps> = ({
  fields,
  entity,
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
  return <div>PrescriptionDetail</div>;
};

export default PrescriptionDetail;
