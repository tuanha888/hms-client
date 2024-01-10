import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import UserTop from "../../../components/common/UserTop";
import { RootState } from "../../../redux";
import { useSelector } from "react-redux";

const PatientLayout = () => {
  const user = useSelector((state: RootState) => state.user.user!);
  return (
    <>
      <UserTop user={user} />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default PatientLayout;
