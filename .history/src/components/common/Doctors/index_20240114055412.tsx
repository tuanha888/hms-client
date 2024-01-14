import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { IoIosAddCircle } from "react-icons/io";
import { getDepartments } from "../../../redux/actions/department-actions";
import { getDoctors } from "../../../redux/actions/doctor-actions";
import { useFetchData } from "../../hooks/useFethData";
import { useModal } from "../../hooks/useModal";
import { find } from "../../utils/find";
import Create from "../Create";
import Overview from "../Overview";
import { Field } from "../interfaces";
import Doctor from "./Doctor";

const Doctors = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getDepartments()), dispatch(getDoctors())]);
  });
  const [doctorName, setDoctorName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const doctorsState = useSelector((state: RootState) => state.doctor.doctors);
  const [doctors, setDoctors] = useState(doctorsState);
  const fields: Field[] = [
    {
      fieldName: "name",
      fieldDisplay: "Họ tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "departmentName",
      fieldDisplay: "Chuyên khoa",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "departmentId",
      fieldDisplay: "Chuyên khoa",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "address",
      fieldDisplay: "Địa chỉ",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "birthDay",
      fieldDisplay: "Ngày sinh",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "phoneNumber",
      fieldDisplay: "Số điện thoại",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "gender",
      fieldDisplay: "Giới tính",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "image",
      fieldDisplay: "",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "image",
      viewDetail: null,
    },
    {
      fieldName: "rating",
      fieldDisplay: "Đánh giá",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
  ];
  const handleDelete = () => {};
  useEffect(() => {
    setDoctors(doctorsState);
  }, [doctorsState]);
  const handleChangeName = (e: any) => {
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
  const handleChangePhone = (e: any) => {
    setPhoneNumber(e.target.value);
    setDoctors(
      find(
        {
          field: "phoneNumber",
          condition: e.target.value.trim(),
        },
        doctorsState
      )
    );
  };
  const renderDoctors = () => {
    return doctors.map((doctor) => {
      return (
        <Doctor
          fields={fields}
          entity={doctor}
          handleDelete={handleDelete}
          openDetailEdit={false}
          handleSubmit={handleSubmit}
        />
      );
    });
  };
  const handleSubmit = () => {};
  return (
    <div className="doctors">
      <div className="doctors-input-container">
        <input
          type="text"
          name="doctorName"
          id=""
          value={doctorName}
          placeholder="Tìm kiếm theo tên"
          className="modal-input doctors-input"
          onChange={(e) => handleChangeName(e)}
        />
        <input
          type="text"
          name="phoneNumber"
          id=""
          value={phoneNumber}
          placeholder="Tìm kiếm theo số điện thoại"
          className="modal-input doctors-input"
          onChange={(e) => handleChangePhone(e)}
        />
      </div>
      {isFetched && (
        <>
          <ul className="doctor-list">{renderDoctors()}</ul>
        </>
      )}
    </div>
  );
};

export default Doctors;
