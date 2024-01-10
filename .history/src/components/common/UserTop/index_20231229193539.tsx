import React from "react";
import { User } from "../../../redux/features/userSlice";

const UserTop: React.FC<User> = (user) => {
  return (
    <div className="usertop">
      <div className="usertop-content">
        <span className="usertop-content-name">{user.name}</span>
        <div className="usertop-content-img">
          <img src={user.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserTop;
