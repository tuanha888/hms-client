import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import UserTop from "../../../components/common/UserTop";

const DoctorLayout = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <UserTop user={user} />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DoctorLayout;
