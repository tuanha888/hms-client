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
  const handleDelete = async (id: string) => {};
  const handleSubmit = async () => {};
  const renderMedicalRecords = () => {
    return medicalRecords.map((medicalRecord) => {
      return (
        <MedicalRecord
          medicalRecord={medicalRecord}
          handleDelete={handleDelete}
          openDetailEdit={true}
          handleSubmit={handleSubmit}
          role={"DOCTOR"}
        />
      );
    });
  };
  return (
    <>
      <ul className="prescriptions layout" style={{ marginLeft: "unset" }}>
        {isFetched && renderMedicalRecords()}
      </ul>
    </>
  );
};

export default MedicalRecords;
