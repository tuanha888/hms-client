import React from "react";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "../../../components/common/interfaces";
import Patient from "../../../components/common/Patient";
import {
  getDoctorPatients,
  getPatients,
} from "../../../redux/actions/patient-actions";
import { useFetchData } from "../../../components/hooks/useFethData";

const Patients = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([
      dispatch(getPatients()),
      dispatch(getDoctorPatients()),
    ]);
  });
  const patients = useSelector(
    (state: RootState) => state.patient.doctorPatients
  );
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
      fieldName: "address",
      fieldDisplay: "Địa chỉ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "birthday",
      fieldDisplay: "Ngày sinh",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
    },
    {
      fieldName: "job",
      fieldDisplay: "Nghề nghiệp",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "phoneNumber",
      fieldDisplay: "Số điện thoại",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "nation",
      fieldDisplay: "Dân tộc",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "gender",
      fieldDisplay: "Giới tính",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
  ];
  const renderPatients = () => {
    return patients.map((patient) => {
      return <Patient fields={fields} entity={patient} openDetailEdit={true} />;
    });
  };
  return (
    <ul className="posts-doctor layout">{isFetched && renderPatients()}</ul>
  );
};

export default Patients;
