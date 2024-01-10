import React from "react";
import { User } from "../../../redux/features/userSlice";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./UserTop.scss";
interface UserTopProps {
  user: User;
}
const UserTop: React.FC<UserTopProps> = ({ user }) => {
  return (
    <div className="usertop">
      <div className="usertop-content">
        <span className="usertop-content-name">{user.name}</span>
        <div className="usertop-content-img">
          <img src={user.avatar} alt="" />
          <IoIosArrowDropdownCircle className="usertop-icon" />
        </div>
      </div>
    </div>
  );
};

export default UserTop;
