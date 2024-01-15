import React from "react";
import Logo from "../../../assets/images/logo-white.png";
import "./Sidebar.scss";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const items = [
    {
      name: "Bệnh nhân",
      to: "/doctor/patients",
    },
    {
      name: "Lịch phẫu thuật",
      to: "/doctor/surgeries",
    },
    {
      name: "Lịch hẹn",
      to: "/doctor/appointments",
    },
    {
      name: "Bài viết",
      to: "/doctor/posts",
    },
    {
      name: "Nhắn tin",
      to: "/doctor/chat"
    }
  ];
  const renderSidebarList = () => {
    return items.map((item) => {
      return (
        <li className="sidebar-item" key={uuidv4()}>
          <NavLink
            to={item.to}
            className={({ isActive }) => {
              const classes = ["sidebar-item-link"];
              if (isActive) classes.push("actived");
              return classes.join(" ");
            }}
          >
            {item.name}
          </NavLink>
        </li>
      );
    });
  };
  return (
    <div className="admin-sidebar sidebar">
      <div className="sidebar-top">
        <img src={Logo} alt="" />
      </div>
      <ul className="sidebar-list">{renderSidebarList()}</ul>
    </div>
  );
};

export default Sidebar;
