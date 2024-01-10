import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { getPrescriptionOfPatient } from "../../../redux/actions/prescription-actions";
import { useFetchData } from "../../hooks/useFethData";
import Prescription from "../Prescription";
import { getMedicalRecordOfPatients } from "../../../redux/actions/medicalRecord-actions";
import MedicalRecord from "./MedicalRecord";
import {
  SurgeryRequest,
  deleteSurgery,
  updateSurgery,
} from "../../../redux/actions/surgery-actions";

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
  const renderPrescription = () => {
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
      <ul className="prescriptions layout">
        {isFetched && renderPrescription()}
      </ul>
    </>
  );
};

export default MedicalRecords;
