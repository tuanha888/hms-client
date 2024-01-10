import React, { useState } from "react";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { getSurgeries } from "../../../redux/actions/surgery-actions";
import "./Surgeries.scss";
const Surgeries = () => {
  const [type, setType] = useState("DAY");
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getSurgeries());
  });
  const surgeries = useSelector((state: RootState) => state.surgery.surgeries);
  const surgeriesToday = surgeries.filter((surgery) => {
    const surgeryDate = new Date(surgery.time);

    return (
      surgeryDate.getDate() === new Date().getDate() &&
      surgeryDate.getMonth() === new Date().getMonth() &&
      surgeryDate.getFullYear() === new Date().getFullYear()
    );
  });

  return (
    <div className="surgeries">
      <ul className="surgeries-top-list">
        <li
          className={`surgeries-top-item ${type === "DAY" ? "actived" : ""}`}
          onClick={() => setType("DAY")}
        >
          Trong ngày
        </li>
        <li
          className={`surgeries-top-item ${type === "WEEK" ? "actived" : ""}`}
          onClick={() => setType("WEEK")}
        >
          Trong tuần
        </li>
      </ul>
    </div>
  );
};

export default Surgeries;
