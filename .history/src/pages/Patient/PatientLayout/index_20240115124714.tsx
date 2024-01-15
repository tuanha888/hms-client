import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import UserTop from "../../../components/common/UserTop";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../../components/hooks/useFethData";
import { getPatient } from "../../../redux/actions/patient-actions";

const PatientLayout = () => {
  const user = useSelector((state: RootState) => state.user.user!);
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getPatient(user.id));
  });
  return (
    <>
      {isFetched && (
        <>
          <UserTop user={user} />
          <Sidebar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default PatientLayout;
