import React, { useState } from "react";
import { useFetchData } from "../../hooks/useFethData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { getDoctorVotes } from "../../../redux/actions/vote-actions";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import "./Votes.scss";
import { useModal } from "../../hooks/useModal";
import { addVoteFields } from "../../utils/constants";
import { InitField } from "../interfaces";
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
  const [isVoted, setIsVoted] = useState(false);
  const {
    isModalOpen: isAddVoteOpen,
    closeModal: closeAddVote,
    openModal: openAddVote,
  } = useModal();
  const fields = addVoteFields;
  const initFields: InitField[] = [
    {
      fieldName: "doctorId",
      fieldValue: doctorId,
    },
    {
      fieldName: "rating",
      fieldValue: "5",
    },
  ];
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
        setIsVoted(true);
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
              <div className="vote-user-modify">
                <button className="modal-button">Sửa</button>
                <button className="modal-button">Xóa</button>
              </div>
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
              <p className="modal-field">Các đánh giá:</p>
              <div className="votes-wrapper">
                <ul className="votes-list">{renderVotes()}</ul>
              </div>
              {!isVoted && (
                <button className="modal-button">Đánh giá bác sĩ</button>
              )}
              <FaTimes className="modal-close" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Votes;
