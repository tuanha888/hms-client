import React, { useState } from "react";
import { useFetchData } from "../../../components/hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { find } from "../../../components/utils/find";
import "./AdminDoctor.scss";
import Doctor from "../../Doctor";
const AdminDoctor = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const [doctorName, setDoctorName] = useState("");
  const state = useSelector((state: RootState) => state);
  const [doctors, setDoctors] = useState(state.doctor.doctors);
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
  const renderDoctors = () => {
    return doctors.map((doctor: any) => {
      return <Doctor doctor={doctor} />;
    });
  };
  return (
    <div className="doctors">
      <input
        type="text"
        name="doctorName"
        id=""
        value={doctorName}
        onChange={(e) => handleChange(e)}
      />
      {isFetched && (
        <>
          <ul className="doctor-list">{renderDoctors()}</ul>
        </>
      )}
    </div>
  );
};

export default AdminDoctor;
