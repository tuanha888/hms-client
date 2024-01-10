import React from "react";
import LogoWhite from "../../../assets/images/logo-white.png";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="admin-sidebar sidebar">
      <div className="sidebar-top">
        <img src={LogoWhite} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
