import React from "react";
import "./Navbar.scss";
import { useModal } from "../../../components/hooks/useModal";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import UserTop from "../../../components/common/UserTop";
const Navbar = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const handleOpenLoginModel = (event: any) => {
    event.stopPropagation();
    openModal();
  };
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a>Home</a>
            </li>
            <li className="nav-item">
              <a>Services</a>
            </li>
            <li className="nav-item">
              <a>About us</a>
            </li>
            <li className="nav-item">
              <a>Contact us</a>
            </li>
            <li className="nav-item" onClick={() => navigate("/posts")}>
              <a>Blog</a>
            </li>

            {user === null ? (
              <li
                className="nav-login"
                onClick={(e) => handleOpenLoginModel(e)}
              >
                Đăng nhập
              </li>
            ) : (
              <>
                <li
                  className="nav-item"
                  onClick={() => navigate(`${user?.role.toLocaleLowerCase()}`)}
                >
                  <a>Trang quản trị</a>
                </li>
                <UserTop user={user} />
              </>
            )}
          </ul>
          {isModalOpen && (
            <LoginModal openModal={openModal} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
