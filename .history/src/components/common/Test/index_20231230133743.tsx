import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../hooks/useFethData";
import { AppDispatch } from "../../../redux";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { getDepartments } from "../../../redux/actions/department-actions";



const Test = () => {
    const dispatch : AppDispatch = useDispatch();
    const isFetched = useFetchData(()=> {
        return Promise.all([dispatch(getDepartments()),dispatch(getDoctors())])
    })
    const doctors = 
  return <ul className="test">

  </ul>
};

export default Test;
