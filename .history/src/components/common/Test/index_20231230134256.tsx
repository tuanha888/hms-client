import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch, RootState } from "../../../redux";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { getDepartments } from "../../../redux/actions/department-actions";
import { Field } from "../interfaces";

const Test = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const fields: Field[] = [
    {
      fieldName: "name",
      fieldDisplay: "Họ tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "departmentName",
      fieldDisplay: "Chuyên khoa",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: "",
      type: "text",
    },
  ];
  const doctors = useSelector((state: RootState) => state.doctor.doctors);
  const renderDoctors = () => {
    return;
  };
  return <ul className="test"></ul>;
};

export default Test;
