import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
interface ModifySurgeryProps {
  surgery: Surgery;
  closeModifyModal: Function;
}
const ModifySurgery: React.FC<ModifySurgeryProps> = ({
  surgery,
  closeModifyModal,
}) => {
  return <div>ModifySurgery</div>;
};

export default ModifySurgery;
