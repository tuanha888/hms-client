import React, { useState } from "react";
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
  const [doctorName, setDoctorName] = useState('')
  const doctors = useSelector((state: RootState) => state.doctor.doctors);
  const state = useSelector((state: RootState) => state)
  const handleChange =() => {

  }
  return <>
    <input type="text" name="doctorName" id="" value={doctorName} onChange={(e)=> setDoctorName(e.target.value)} />
    {isFetched && }
  </>
};

export default AdminDoctor;
