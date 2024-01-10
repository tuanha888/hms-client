import React from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentsOfDoctor,
  getAppointmentsOfPatient,
} from "../../../redux/actions/appointment-actions";
interface AppointmentsProps {
  role: "DOCTOR" | "PATIENT";
}
const Appointments: React.FC<AppointmentsProps> = ({ role }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    if (role === "DOCTOR") return dispatch(getAppointmentsOfDoctor());
    else return dispatch(getAppointmentsOfPatient());
  });
  const appointments =
    role === "DOCTOR"
      ? useSelector((state: RootState) => state.appointment.doctorAppointments)
      : useSelector(
          (state: RootState) => state.appointment.patientAppointments
        );
  return <div>Appointments</div>;
};

export default Appointments;
