import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Navigate } from "react-router-dom";

const Authorization = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return <Navigate to={`/${user.role.toLowerCase()}`} />;
};

export default Authorization;
