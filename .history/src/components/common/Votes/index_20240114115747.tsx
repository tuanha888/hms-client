import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { getDoctorVotes } from "../../../redux/actions/vote-actions";
import { FaTimes } from "react-icons/fa";
interface VotesProps {
  doctorId: string;
  closeModal: Function;
}
const Votes: React.FC<VotesProps> = ({ doctorId }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getDoctorVotes(doctorId));
  });
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal">
          <FaTimes className="modal-close" />
        </div>
      </div>
    </div>
  );
};

export default Votes;
