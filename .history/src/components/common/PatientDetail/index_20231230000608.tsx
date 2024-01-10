import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
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
  const patient = useSelector((state: RootState) => state.patient.patient);
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
              <span className="modal-value">{patient?.name}</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Địa chỉ</span>
              <span className="modal-value">{patient?.address}</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Ngày sinh</span>
              <span className="modal-value">
                {patient?.birthday.toTimeString()}
              </span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Nghề nghiệp</span>
              <span className="modal-value">{patient?.job}</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Số điện thoại</span>
              <span className="modal-value">{patient?.phoneNumber}</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Dân tộc</span>
              <span className="modal-value">{patient?.nation}</span>
            </p>
            <p className="modal-title">
              <span className="modal-field">Giới tính</span>
              <span className="modal-value">{patient?.gender}</span>
            </p>
            <FaTimes className="modal-close" onClick={closePatientModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDetail;
