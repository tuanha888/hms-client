import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const Notification = () => {
  const noti = useSelector((state: RootState) => state.notification.value);
  useEffect(() => {}, [noti]);
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
