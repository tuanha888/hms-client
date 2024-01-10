import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Navigate, useNavigate } from "react-router-dom";
interface AuthorizationProps {
  element: ReactElement;
}
const Authorization: React.FC<AuthorizationProps> = ({ element }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  //const path =
  if (1 == 1) return <Navigate to={`/${user.role.toLowerCase()}`} />;
  return <>{element}</>;
};

export default Authorization;
