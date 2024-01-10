import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
interface AuthorizationProps {
  element: ReactElement;
}
const Authorization: React.FC<AuthorizationProps> = ({ element }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  if (user.role.toLowerCase() != pathName)
    return <Navigate to={`/${user.role.toLowerCase()}`} />;
  return <>{element}</>;
};

export default Authorization;
