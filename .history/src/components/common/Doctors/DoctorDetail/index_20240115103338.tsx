import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../../hooks/useModal";
import ConfirmModal from "../../ConfirmModal";
import "../../Detail/Detail.scss";
import Modify from "../../Modify";
import { Field, InitField } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import Votes from "../../Votes";
interface DetailProps {
  fields: Field[];
  entity: any;
  closeDetailModal: Function;
  handleDelete: Function;
  handleSubmit: Function;
  id: string | null;
}
const DoctorDetail: React.FC<DetailProps> = ({
  fields,
  entity,
  id,
  closeDetailModal,
}) => {
  console.log(entity);
  entity =
    !entity && id !== null
      ? useSelector((state: RootState) =>
          state.doctor.doctors.filter((doctor) => doctor.id === id)
        )[0]
      : entity;
  const {
    isModalOpen: isVotesOpen,
    closeModal: closeVotesModal,
    openModal: openVotesModal,
  } = useModal();
  const createFields: Field[] = [
    {
      fieldName: "doctorName",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "doctorId",
      fieldDisplay: "Bác sĩ",
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
      viewDetail: null,
    },
    {
      fieldName: "patientId",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "time",
      fieldDisplay: "Thời gian",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "datetime",
      viewDetail: null,
    },
    {
      fieldName: "status",
      fieldDisplay: "Trạng thái",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "note",
      fieldDisplay: "Ghi chú",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
  ];
  const renderEntity = () => {
    const render: ReactNode[] = [];
    fields.forEach((field) => {
      if (field.detailDisplay)
        if (field.type !== "image")
          render.push(
            <p className="modal-item">
              <span className="modal-field">{field.fieldDisplay}:</span>{" "}
              <span>
                {!field.type.includes("date")
                  ? entity[field.fieldName]
                  : field.type === "dateday"
                  ? entity[field.fieldName].toLocaleDateString("vi", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : entity[field.fieldName].toLocaleDateString("vi", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}
              </span>
            </p>
          );
        else
          render.unshift(
            <div className="overview-img-container">
              <div className="overview-img">
                <img src={entity[field.fieldName]} alt="" />
              </div>
            </div>
          );
    });
    return render;
  };
  return (
    <>
      <div className="detail modal-container">
        <div className="modal-wrapper">
          <div className="detail-modal modal">
            {renderEntity()}
            <button className="modal-button">Tạo lịch hẹn</button>
            <button className="modal-button">Nhắn tin</button>
            <button className="modal-button" onClick={openVotesModal}>
              Xem đánh giá
            </button>
            <FaTimes className="modal-close" onClick={closeDetailModal} />
          </div>
        </div>
      </div>
      {isVotesOpen && (
        <Votes
          doctorId={entity.id}
          doctorName={entity.name}
          closeModal={closeVotesModal}
        />
      )}
    </>
  );
};

export default DoctorDetail;
