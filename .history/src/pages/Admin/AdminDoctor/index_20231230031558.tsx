import React from "react";
import { useFetchData } from "../../../components/hooks/useFethData";
import { AppDispatch } from "../../../redux";
import { useDispatch } from "react-redux";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";

const AdminDoctor = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  return <div>AdminDoctor</div>;
};

export default AdminDoctor;
