import React, { useEffect, useRef } from "react";
import * as yup from "yup";
import { FaTimes } from "react-icons/fa";
import { LoginProps } from "../../../../redux/actions/auth-actions";
import { useFormik } from "formik";
import "./LoginModal.scss";
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
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });
  const loginModal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleShowLoginModal = (event: MouseEvent) => {
      if (
        event.target === loginModal.current ||
        loginModal.current?.contains(event.target as Node)
      )
        return;
      closeModal();
    };
    window.addEventListener("click", handleShowLoginModal);
    return () => {
      window.removeEventListener("click", handleShowLoginModal);
    };
  }, []);
  const handleOpenLoginModel = (event: any) => {
    event.stopPropagation();
    closeModal();
  };
  return (
    <div className="login">
      <div className="login-modal" ref={loginModal}>
        <div className="login-title">
          <span className="login-title-text">Đăng nhập</span>
          <FaTimes className="login-close" onClick={closeModal} />
        </div>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Tên đăng nhập"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
