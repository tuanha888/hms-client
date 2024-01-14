import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../../hooks/useModal";
import ConfirmModal from "../../ConfirmModal";
import "../../Detail/Detail.scss";
import Modify from "../../Modify";
import { Field } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
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
  entity =
    !entity && id !== null
      ? useSelector((state: RootState) =>
          state.doctor.doctors.filter((doctor) => doctor.id === id)
        )[0]
      : entity;
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
    <div className="detail modal-container">
      {
        <div className="modal-wrapper">
          <div className="detail-modal modal">
            {renderEntity()}
            <button className="modal-button">Tạo lịch hẹn</button>
            <button className="modal-button">Nhắn tin</button>
            <button className="modal-button">Xem đánh giá</button>
            <button className="modal-button">Đánh giá</button>
            <FaTimes className="modal-close" onClick={closeDetailModal} />
          </div>
        </div>
      }
    </div>
  );
};

export default DoctorDetail;
