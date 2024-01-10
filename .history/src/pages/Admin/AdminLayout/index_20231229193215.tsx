import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import UserTop from "../../../components/common/UserTop";

const AdminLayout = () => {
  return (
    <div className="admin">
      <UserTop />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
