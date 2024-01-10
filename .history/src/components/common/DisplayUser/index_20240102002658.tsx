import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const DisplayUser = () => {
  const displayUser = useSelector((state: RootState) => state.displayUser);

  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal">
            <p className="modal-item overview-item">
              <span className="modal-field overview-field">Bác sĩ:</span>{" "}
              <span>{prescription.doctorName}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayUser;
