import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const Protected = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return <div>Protected</div>;
};

export default Protected;
