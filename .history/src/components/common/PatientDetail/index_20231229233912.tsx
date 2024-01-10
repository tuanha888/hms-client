import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import "./PatientDetail.scss";
import { getPatient } from "../../../redux/actions/patient-actions";
interface PatientDetailProps {
  id: string;
  closePatientModal: Function;
}
const PatientDetail: React.FC<PatientDetailProps> = ({
  id,
  closePatientModal,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getPatient(id));
  });
  return <div>PatientDetail</div>;
};

export default PatientDetail;
