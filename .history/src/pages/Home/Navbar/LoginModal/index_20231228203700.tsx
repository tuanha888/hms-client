import React from "react";
import { LoginProps } from "../../../../redux/actions/auth-actions";
interface LoginModalProps {
  openModal: Function;
  closeModal: Function;
}
const initialValues: LoginProps = {
  username: "",
  password: "",
};
const LoginModal: React.FC<LoginModalProps> = ({ openModal, closeModal }) => {
  return (
    <div className="login">
      <div className="login-title">Đăng nhập</div>
    </div>
  );
};

export default LoginModal;
