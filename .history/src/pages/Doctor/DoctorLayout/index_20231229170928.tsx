import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const DoctorLayout = () => {
  return <>
    <Sidebar/>
    <Outlet/.
  </>
};

export default DoctorLayout;
