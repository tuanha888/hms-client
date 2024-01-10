import React from "react";
import Logo from "../../../assets/images/logo-white.png";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="admin-sidebar sidebar">
      <div className="sidebar-top">
        <img src={Logo} alt="" />
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">Lịch phẫu thuật</li>
        <li className="sidebar-item">Bác sĩ</li>
      </ul>
    </div>
  );
};

export default Sidebar;
