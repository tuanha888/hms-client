import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentsOfDoctor,
  getAppointmentsOfPatient,
} from "../../../redux/actions/appointment-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
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
  const fields = [
    {
      fieldName: "doctorName",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: role === "PATIENT" ? doctors : null,
      type: "text",
    },
  ];
  return <div>Appointments</div>;
};

export default Appointments;
