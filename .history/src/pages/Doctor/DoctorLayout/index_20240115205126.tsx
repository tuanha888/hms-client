import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import UserTop from "../../../components/common/UserTop";
import { useFetchData } from "../../../components/hooks/useFethData";
import { getDoctor } from "../../../redux/actions/doctor-actions";

const DoctorLayout = () => {
  const user = useSelector((state: RootState) => state.user.user!);
  const dispatch: AppDispatch = useDispatch();
  // const isFetched = useFetchData(() => {
  //   return dispatch(getDoctor(user.id));
  // });
  return (
    <>
      {/* {isFetched &&  */}(
      <>
        <UserTop user={user} />
        <Sidebar />
        <Outlet />
      </>
      )
    </>
  );
};

export default DoctorLayout;
