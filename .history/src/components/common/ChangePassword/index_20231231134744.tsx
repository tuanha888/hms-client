import React from "react";
import { ChangePassword } from "../../../redux/actions/auth-actions";
import * as yup from "yup";
import { useFormik } from "formik";

interface ChangePasswordProps {
  closeModal: Function;
}
const initialValues = {
  currentPassword: "",
  newPassword: "",
  reNewPassword: "",
};
const changePasswordSchema = yup.object({
  currentPassword: yup.string().min(8, "Mật khẩu phải có ít nhất 8 kí tự!"),
  newPassword: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 kí tự!")
    .required("Vui lòng nhập mật khẩu mới"),
  renewPassword: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 kí tự!")
    .oneOf([yup.ref("newPassword"), null], "Mật khẩu nhập lại không khớp")
    .required("Vui lòng nhập lại mật khẩu mới"),
});
const ChangePasswordModal: React.FC<ChangePasswordProps> = ({ closeModal }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        await dispatch(Login(values));
        navigate("/patient");
        dispatch(setLoading(false));
      } catch (error) {}
    },
  });
  return (
    <div className="modal-container">
      <div className="modal"></div>
    </div>
  );
};

export default ChangePasswordModal;
