import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { getDoctorVotes } from "../../../redux/actions/vote-actions";
import { FaTimes } from "react-icons/fa";
interface VotesProps {
  doctorId: string;
  doctorName: string;
  closeModal: Function;
}
const Votes: React.FC<VotesProps> = ({ doctorId, closeModal, doctorName }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getDoctorVotes(doctorId));
  });
  return (
    <>
      {isFetched && (
        <div className="modal-container">
          <div className="modal-wrapper">
            <div className="modal">
              <span className="modal-field">Bác sĩ: </span>
              <span>{doctorName}</span>
              <p className="modal-field">ĐÁNH GIÁ</p>

              <FaTimes className="modal-close" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Votes;
