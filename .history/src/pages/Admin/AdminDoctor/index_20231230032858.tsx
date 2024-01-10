import React from "react";
import { useFetchData } from "../../../components/hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";

const AdminDoctor = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const doctors = useSelector((state: RootState) => state.doctor.doctors);
  return <>
    <input type="text" name="" id="" onChange={} />
    {isFetched && }
  </>
};

export default AdminDoctor;
