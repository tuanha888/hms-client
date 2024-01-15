import { FaTimes } from "react-icons/fa";
import { MedicalRecord } from "../../../../redux/features/medicalRecordSlice";
import { useModal } from "../../../hooks/useModal";
import Medicine from "../../Medicine";
import ViewDetail from "../../ViewDetail";
import { Field, InitField } from "../../interfaces";
import Overview from "../../Overview";
import Detail from "../../Detail";
import Create from "../../Create";
import Modify from "../../Modify";
import { medicalRecordFields } from "../../../utils/constants";
import ConfirmModal from "../../ConfirmModal";
import { AppDispatch } from "../../../../redux";
import { useDispatch } from "react-redux";
import {
  createTreatmentPlan,
  deleteTreatmentPlan,
  updateTreatmentPlan,
} from "../../../../redux/actions/treatmentPlan-actions";
import {
  deleteMedicalRecord,
  updateMedicalRecord,
} from "../../../../redux/actions/medicalRecord-actions";

interface MedicalRecordDetailProps {
  medicalRecord: MedicalRecord;
  closeDetailModal: Function;
  handleDelete: Function;
  openDetailEdit: boolean;
  handleSubmit: Function;
}
const MedicalRecordDetail: React.FC<MedicalRecordDetailProps> = ({
  medicalRecord,
  closeDetailModal,
  handleDelete,
  handleSubmit,
  openDetailEdit,
}) => {
  const {
    isModalOpen: isModifyOpen,
    openModal: openModify,
    closeModal: closeModify,
  } = useModal();
  const {
    isModalOpen: isConfirmModal,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = useModal();
  const {
    isModalOpen: isOpenTM,
    openModal: openTM,
    closeModal: closeTM,
  } = useModal();
  const {
    isModalOpen: isAddTM,
    openModal: openAddTM,
    closeModal: closeAddTM,
  } = useModal();
  const dispatch: AppDispatch = useDispatch();
  const treatmentPlanFields: Field[] = [
    {
      fieldName: "doctorId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "doctorName",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: (entity) => {
        return (
          <ViewDetail
            patientId={null}
            doctorId={medicalRecord.treatmentPlan?.doctorId}
          />
        );
      },
    },
    {
      fieldName: "patientId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "patientName",
      fieldDisplay: "Bệnh nhân",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: (entity) => {
        return (
          <ViewDetail
            patientId={medicalRecord.treatmentPlan?.patientId}
            doctorId={null}
          />
        );
      },
    },
    {
      fieldName: "treatmentMethod",
      fieldDisplay: "Kế hoạch điều trị",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "textarea",
      viewDetail: null,
    },
    {
      fieldName: "lastExaminationDay",
      fieldDisplay: "Ngày khám gần nhất",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "nextExpectedExaminationDay",
      fieldDisplay: "Ngày khám dự kiến tiếp theo",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "note",
      fieldDisplay: "Ghi chú",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "textarea",
      viewDetail: null,
    },
    {
      fieldName: "medicalRecordId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
  ];
  const initField: InitField[] = [
    {
      fieldName: "doctorId",
      fieldValue: medicalRecord.doctorId,
    },
    {
      fieldName: "patientId",
      fieldValue: medicalRecord.patientId,
    },
    {
      fieldName: "medicalRecordId",
      fieldValue: medicalRecord.id,
    },
  ];
  const handleDeleteTM = async () => {
    await dispatch(deleteTreatmentPlan(medicalRecord.treatmentPlan?.id));
    closeTM();
  };
  const handleModifyTM = async (data: { id: string; value: any }) => {
    await dispatch(updateTreatmentPlan(data));
  };
  const handleAddTM = async (data) => {
    await dispatch(createTreatmentPlan(data));
  };
  const handleUpdateMR = async (data: { id: string; value: any }) => {
    await dispatch(updateMedicalRecord(data));
  };
  const handleDeleteMR = async () => {
    await dispatch(deleteMedicalRecord(medicalRecord.id));
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal">
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
              <span>{medicalRecord.bhytCode}</span>
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
              <p className="modal-field overview-field">
                Chẩn đoán lúc vào viện:
              </p>{" "}
              <p>{medicalRecord.inDayDiagnose}</p>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">
                Chẩn đoán lúc ra viện:
              </p>{" "}
              <p>{medicalRecord.outDayDiagnose}</p>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">Tiền sử bệnh lý:</p>{" "}
              <p>{medicalRecord.medicalHistory}</p>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">
                Quá trình diễn biến của bệnh:
              </p>{" "}
              <p>{medicalRecord.diseaseProgress}</p>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">Kết quả xét nghiệm:</p>{" "}
              <p>{medicalRecord.testResults}</p>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">
                Trạng thái lúc ra viện:
              </p>{" "}
              <p>{medicalRecord.hospitalDischargeStatus}</p>
            </p>
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Điều trị:</span>{" "}
              <span>{medicalRecord.stayType}</span>
            </p>
            <p className="modal-item overview-item">
              <p className="modal-field overview-field">Ghi chú:</p>{" "}
              <p>{medicalRecord.note}</p>
            </p>
            {medicalRecord.treatmentPlan !== null && (
              <button className="modal-button" onClick={openTM}>
                Xem kế hoạch điều trị
              </button>
            )}
            {medicalRecord.treatmentPlan === null && (
              <button className="modal-button" onClick={openAddTM}>
                Thêm kế hoạch điều trị
              </button>
            )}
            <FaTimes className="modal-close" onClick={closeDetailModal} />
            {openDetailEdit && (
              <>
                <button className="modal-button" onClick={openModify}>
                  Sửa
                </button>
                <button className="modal-button" onClick={openConfirmModal}>
                  Xóa
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {isOpenTM && (
        <Detail
          fields={treatmentPlanFields}
          entity={medicalRecord.treatmentPlan!}
          closeDetailModal={closeTM}
          handleDelete={handleDeleteTM}
          openDetailEdit={true}
          handleSubmit={handleModifyTM}
        />
      )}
      {isAddTM && (
        <Create
          fields={treatmentPlanFields}
          initFields={initField}
          handleSubmit={handleAddTM}
          closeCreateModal={closeAddTM}
        />
      )}
      {isModifyOpen && (
        <Modify
          fields={medicalRecordFields}
          entity={medicalRecord}
          closeModifyModal={closeModify}
          handleSubmit={handleUpdateMR}
        />
      )}
      {isConfirmModal && (
        <ConfirmModal
          type={"DELETE"}
          closeConfirmModal={closeConfirmModal}
          closeModifyModal={null}
          deleteFunction={handleDeleteMR}
        />
      )}
    </>
  );
};

export default MedicalRecordDetail;
