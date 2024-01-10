import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import "./PatientDetail.scss";
import { getPatient } from "../../../redux/actions/patient-actions";
import { FaTimes } from "react-icons/fa";
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
  return (
    <>
      {isFetched && (
        <div className="modal-container">
          <div className="modal">
            <p className="modal-title">
              <span className="modal-field">Tên</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Địa chỉ</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Ngày sinh</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Nghề nghiệp</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Số điện thoại</span>
            </p>
            <FaTimes className="modal-close" onClick={closePatientModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDetail;
