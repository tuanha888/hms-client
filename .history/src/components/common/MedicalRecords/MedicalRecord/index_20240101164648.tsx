import { MedicalRecord } from "../../../../redux/features/medicalRecordSlice";
import { useModal } from "../../../hooks/useModal";

interface PrescriptionDetailProps {
  medicalRecord: MedicalRecord;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
  role: "DOCTOR" | "PATIENT";
}
const Prescription: React.FC<PrescriptionDetailProps> = ({
  medicalRecord,
  handleDelete,
  openDetailEdit,
  handleSubmit,
  role,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <li className="overview" onClick={openModal}>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Bệnh nhân:</span>{" "}
          <span>{medicalRecord.patientName}</span>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Bác sĩ:</span>{" "}
          <span>{medicalRecord.doctorName}</span>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Khoa:</span>{" "}
          <span>{medicalRecord.departmentName}</span>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Mã BHYT:</span>{" "}
          <span>{medicalRecord.BHYTCode}</span>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Ngày vào viện:</span>{" "}
          <span>
            {medicalRecord.inDay.toLocaleDateString("vi", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Ngày ra viện:</span>{" "}
          <span>
            {medicalRecord.inDay.toLocaleDateString("vi", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </p>
        <p className="modal-item overview-item">
          <p className="modal-field overview-field">Chẩn đoán lúc vào viện:</p>{" "}
          <p>{medicalRecord.inDayDiagnose}</p>
        </p>
        <p className="modal-item overview-item">
          <p className="modal-field overview-field">Chẩn đoán lúc ra viện:</p>{" "}
          <p>{medicalRecord.outDayDiagnose}</p>
        </p>
        <p className="modal-item overview-item">
          <span className="modal-field overview-field">Ngày tạo:</span>{" "}
          <span>
            {prescription.createdDay.toLocaleDateString("vi", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </p>
        <ul className="medicines">{renderMedicines()}</ul>
      </li>
      {isModalOpen && (
        <PrescriptionDetail
          prescription={prescription}
          closeDetailModal={closeModal}
          handleDelete={handleDelete}
          openDetailEdit={role === "DOCTOR" ? true : false}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};
export default Prescription;
