import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { getPrescriptionOfPatient } from "../../../redux/actions/prescription-actions";
import { useFetchData } from "../../hooks/useFethData";
import Prescription from "../Prescription";
import { getMedicalRecordOfPatients } from "../../../redux/actions/medicalRecord-actions";
import MedicalRecord from "./MedicalRecord";

interface MedicalRecordsProps {
  id: string;
}
const MedicalRecords: React.FC<MedicalRecordsProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getMedicalRecordOfPatients(id));
  });
  const medicalRecords = useSelector(
    (state: RootState) => state.medicalRecord.medicalRecords
  );
  const handleDelete = () => {};
  const handleSubmit = () => {};
  const renderPrescription = () => {
    return medicalRecords.map((medicalRecord) => {
      return (
        <MedicalRecord
          medicalRecord={undefined}
          handleDelete={undefined}
          openDetailEdit={false}
          handleSubmit={undefined}
          role={"DOCTOR"}
        />
      );
    });
  };
  return (
    <>
      <ul className="prescriptions layout">
        {isFetched && renderPrescription()}
      </ul>
    </>
  );
};

export default MedicalRecords;
