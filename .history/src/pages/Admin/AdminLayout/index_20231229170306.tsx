import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
