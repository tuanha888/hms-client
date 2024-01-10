import React from "react";
import { Field } from "../interfaces";
interface ModifyProps {
  fields: Field[];
  entity: any;
  closeModifyModal: Function;
}
const Modify: React.FC<ModifyProps> = ({
  fields,
  entity,
  closeModifyModal,
}) => {
  return <div>Modify</div>;
};

export default Modify;
