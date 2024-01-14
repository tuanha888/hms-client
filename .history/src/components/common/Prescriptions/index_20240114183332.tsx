import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getPrescriptionOfPatient } from "../../../redux/actions/prescription-actions";
import Prescription from "../Prescription";
interface PrescriptionsProps {
  id: string | null;
}
const Prescriptions: React.FC<PrescriptionsProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const userId =
    id !== null ? id : useSelector((state: RootState) => state.user.user!.id);
  const isFetched = useFetchData(() => {
    return dispatch(getPrescriptionOfPatient(userId));
  });
  const prescriptions = useSelector(
    (state: RootState) => state.prescription.patientPrescriptions
  );
  const renderPrescription = () => {
    return prescriptions.map((prescription) => {
      return (
        <Prescription
          prescription={prescription}
          openDetailEdit={false}
          role={id !== null ? "DOCTOR" : "PATIENT"}
        />
      );
    });
  };
  return (
    <>
      <ul className="prescriptions layout" style={{ marginLeft: "unset" }}>
        {isFetched && renderPrescription()}
      </ul>
    </>
  );
};

export default Prescriptions;
