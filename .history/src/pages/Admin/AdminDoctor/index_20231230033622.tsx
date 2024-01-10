import React, { useState } from "react";
import { useFetchData } from "../../../components/hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { find } from "../../../components/utils/find";

const AdminDoctor = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const [doctorName, setDoctorName] = useState("");
  const state = useSelector((state: RootState) => state);
  const [doctors, setDoctors] = useState([]);
  const handleChange = (e: any) => {
    setDoctorName(e.target.value);
    setDoctors(
      find(
        {
          typeEntity: "doctor.doctors",
          field: "name",
          condition: e.target.value,
        },
        state
      )
    );
  };
  const renderDoctors = () => {};
  return (
    <>
      <input
        type="text"
        name="doctorName"
        id=""
        value={doctorName}
        onChange={(e) => handleChange(e)}
      />
      {isFetched && (
        <>
          <ul className="doctors-list">{renderDoctors()}</ul>
        </>
      )}
    </>
  );
};

export default AdminDoctor;
