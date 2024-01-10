import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Navigate } from "react-router-dom";
import React, { ReactElement } from "react";
interface ProtectedProps {
  element: ReactElement;
}
const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.user);
  if (!user) return <Navigate to="/" />;
  return <>{children}</>;
};

export default Protected;
