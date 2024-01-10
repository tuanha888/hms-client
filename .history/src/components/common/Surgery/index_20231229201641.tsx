import React from "react";
import { Surgery } from "../../../redux/features/surgerySlice";
// import { Surgery as SurgeryProps } from "../../../redux/features/surgerySlice";
interface SurgeryProps {
  surgery: Surgery;
}
const Surgery: React.FC<SurgeryProps> = ({ surgery }) => {
  return <li className="surgery-item"></li>;
};

export default Surgery;
