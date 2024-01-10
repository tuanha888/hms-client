import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const DisplayUser = () => {
  const displayUser = useSelector((state: RootState) => state.displayUser);

  return (
    <>
      {displayUser.display && (
        <div className="modal-container">
          <div className="modal-wrapper">
            <div className="modal">
              <p className="modal-item overview-item">
                <span className="modal-field overview-field">
                  Tên đăng nhập:
                </span>{" "}
                <span>{displayUser.username}</span>
              </p>
              <p className="modal-item overview-item">
                <span className="modal-field overview-field">Mật khẩu:</span>{" "}
                <span>{displayUser.password}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayUser;
