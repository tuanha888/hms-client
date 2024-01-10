import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

const Protected = (Component: ReactElement) => {
  const user = useSelector((state: RootState) => state.user.user);
  if (!user) return <Navigate to="/" />;
  return <Component />;
};

export default Protected;
