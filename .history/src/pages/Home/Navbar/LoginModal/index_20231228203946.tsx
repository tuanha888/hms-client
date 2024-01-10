import React from "react";
import * as yup from "yup";
import { LoginProps } from "../../../../redux/actions/auth-actions";
interface LoginModalProps {
  openModal: Function;
  closeModal: Function;
}
const initialValues: LoginProps = {
  username: "",
  password: "",
};
const loginSchema = yup.object({
  username: yup.string().required("Tên đăng nhập là bắt buộc!"),
  password: yup.string().min(8, "Mật khẩu phải có ít nhất 8 kí tự!"),
});
const LoginModal: React.FC<LoginModalProps> = ({ openModal, closeModal }) => {
  return (
    <div className="login">
      <div className="login-title">Đăng nhập</div>
    </div>
  );
};

export default LoginModal;
