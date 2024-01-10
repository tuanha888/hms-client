import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
interface PatientDetailProps {
  id: string;
}
const PatientDetail: React.FC<PatientDetailProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {});
  return <div>PatientDetail</div>;
};

export default PatientDetail;
