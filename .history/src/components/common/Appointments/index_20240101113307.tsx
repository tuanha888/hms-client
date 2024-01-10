import React, { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentsOfDoctor,
  getAppointmentsOfPatient,
} from "../../../redux/actions/appointment-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import Appointment from "../Appointment";
import "../Surgeries/Surgeries.scss";
import "./Appointments.scss";
interface AppointmentsProps {
  role: "DOCTOR" | "PATIENT";
}
const Appointments: React.FC<AppointmentsProps> = ({ role }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    if (role === "DOCTOR") return dispatch(getAppointmentsOfDoctor());
    else
      return Promise.all([
        dispatch(getAppointmentsOfPatient()),
        dispatch(getDoctors()),
      ]);
  });
  const [type, setType] = useState("ACCEPT");
  const doctors =
    role === "PATIENT"
      ? useSelector((state: RootState) => state.doctor.doctors)
      : [];
  const appointments =
    role === "DOCTOR"
      ? useSelector((state: RootState) => state.appointment.doctorAppointments)
      : useSelector(
          (state: RootState) => state.appointment.patientAppointments
        );
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);
  const fields = [
    {
      fieldName: "doctorName",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: role === "PATIENT" ? doctors : null,
      type: "text",
    },
    {
      fieldName: "doctorId",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "patientName",
      fieldDisplay: "Bệnh nhân",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "patientId",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "time",
      fieldDisplay: "Thời gian",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "datetime",
    },
    {
      fieldName: "status",
      fieldDisplay: "Trạng thái",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "note",
      fieldDisplay: "Ghi chú",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
  ];
  useEffect(() => {
    setFilteredAppointments(appointments);
  }, [appointments]);
  const renderAppointments = () => {
    return filteredAppointments.map((appointment) => {
      return <Appointment fields={fields} entity={appointment} role={role} />;
    });
  };
  return (
    <>
      <ul className="surgeries-top-list list-filter">
        <li
          className={`surgeries-top-item ${type === "ACCEPT" ? "actived" : ""}`}
          onClick={() => setType("ACCEPT")}
        >
          Sắp tới
        </li>
        <li
          className={`surgeries-top-item ${
            type === "PENDING" ? "actived" : ""
          }`}
          onClick={() => setType("PENDING")}
        >
          Chờ chấp nhận
        </li>
        <li
          className={`surgeries-top-item ${type === "REJECT" ? "actived" : ""}`}
          onClick={() => setType("REJECT")}
        >
          Bị từ chối
        </li>
      </ul>
      <ul className="appointments layout">
        {isFetched && renderAppointments()}
      </ul>
    </>
  );
};

export default Appointments;
