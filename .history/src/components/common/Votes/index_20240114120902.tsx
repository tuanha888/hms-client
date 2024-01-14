import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { getDoctorVotes } from "../../../redux/actions/vote-actions";
import { MdOutlineStarPurple500 } from "react-icons/md";
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
  const user = useSelector((state: RootState) => state.user.user);
  const votes = useSelector((state: RootState) => state.vote.doctorVotes);
  const renderVotes = () => {
    return votes.map((vote) => {
      if (vote.patientId !== user?.id) {
        return (
          <li className="vote">
            <p className="vote-patient">{vote.patientName}</p>
            <p className="vote-star">
              {vote.rating} <MdOutlineStarPurple500 />
            </p>
            <p className="vote-content">{vote.content}</p>
          </li>
        );
      } else {
        return (
          <li className="vote">
            <div className="vote-wrapper">
              <div className="vote-user-content">
                <p className="vote-patient">{vote.patientName}</p>
                <p className="vote-star">
                  {vote.rating} <MdOutlineStarPurple500 />
                </p>
                <p className="vote-content">{vote.content}</p>
              </div>
              <div className="vote-user-modify"></div>
            </div>
          </li>
        );
      }
    });
  };
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
