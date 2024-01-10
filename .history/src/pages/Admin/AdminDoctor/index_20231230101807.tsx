import React, { useEffect, useState } from "react";
import { useFetchData } from "../../../components/hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { find } from "../../../components/utils/find";
import "./AdminDoctor.scss";
import Doctor from "../../../components/common/Doctor";
const AdminDoctor = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const [doctorName, setDoctorName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const doctorsState = useSelector((state: RootState) => state.doctor.doctors);
  const [doctors, setDoctors] = useState(doctorsState);
  useEffect(() => {
    setDoctors(doctorsState);
  }, [doctorsState]);
  const handleChange = (e: any) => {
    setDoctorName(e.target.value);
    setDoctors(
      find(
        {
          field: "name",
          condition: e.target.value.trim(),
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
        placeholder="Tìm kiếm theo tên"
        className="modal-input doctors-input"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="phoneNumber"
        id=""
        value={phoneNumber}
        placeholder="Tìm kiếm theo số điện thoại"
        className="modal-input doctors-input"
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
