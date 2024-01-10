import { Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const Notification = () => {
  const noti = useSelector((state: RootState) => state.notification.value);
  return (
    <div className="notification">
      {!noti ? (
        <Alert severity="error">Thất bại!</Alert>
      ) : (
        <Alert severity="success">Thành công!</Alert>
      )}
    </div>
  );
};

export default Notification;
