import React from "react";
import { Field } from "../interfaces";
interface DetailProps {
  fields: Field[];
  entity: any;
}
const Detail: React.FC<DetailProps> = ({ fields, entity }) => {
  return <div>Detail</div>;
};

export default Detail;
