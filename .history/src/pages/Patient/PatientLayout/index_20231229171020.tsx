import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const PatientLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default PatientLayout;
