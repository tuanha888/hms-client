import { Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const Notification = () => {
  const noti = useSelector((state: RootState) => state.notification.value);
  return (
    <div className="notification">
      {!noti ? (
        <Alert severity="error">This is an error message!</Alert>
      ) : (
        <Alert severity="success">This is a success message!</Alert>
      )}
    </div>
  );
};

export default Notification;
