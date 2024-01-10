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
  const doctorsState = useSelector((state: RootState) => state.doctor.doctors);
  const [doctors, setDoctors] = useState(doctorsState);
  const handleChange = (e: any) => {
    setDoctorName(e.target.value);
    setDoctors(
      find(
        {
          field: "name",
          condition: e.target.value,
        },
        doctorsState
      )
    );
  };
  const renderDoctors = () => {
    return doctors.map((doctor: any) => {
      return <Doctor doctor={doctor} key={doctor.id} />;
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
