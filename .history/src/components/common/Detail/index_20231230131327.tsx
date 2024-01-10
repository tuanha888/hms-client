import React from "react";
import { Field } from "../interfaces";
interface DetailProps {
  fields: Field[];
  entity: any;
  closeDetailModal: Function;
}
const Detail: React.FC<DetailProps> = ({ fields, entity }) => {
  return <div>Detail</div>;
};

export default Detail;
