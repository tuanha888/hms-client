import React from "react";
interface LoginModalProps {
  openModal: Function;
  closeModal: Function;
}
const LoginModal: React.FC<LoginModalProps> = ({ openModal, closeModal }) => {
  return <div>LoginModal</div>;
};

export default LoginModal;
