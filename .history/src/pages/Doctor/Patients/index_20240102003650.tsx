import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "../../../components/common/interfaces";
import Patient from "../../../components/common/Patient";
import {
  getDoctorPatients,
  getPatients,
} from "../../../redux/actions/patient-actions";
import { useFetchData } from "../../../components/hooks/useFethData";
import Create from "../../../components/common/Create";
import { useModal } from "../../../components/hooks/useModal";
import { IoIosAddCircle } from "react-icons/io";
import "./Patients.scss";
import { find } from "../../../components/utils/find";
const Patients = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([
      dispatch(getPatients()),
      dispatch(getDoctorPatients()),
    ]);
  });
  const {
    isModalOpen: isOpenCreateModal,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = useModal();
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const patientsState = useSelector(
    (state: RootState) => state.patient.patients
  );

  const [patients, setPatients] = useState([]);
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
      type: "select",
    },
  ];
  useEffect(() => {
    setPatients([]);
  }, [patientsState]);
  const handleChangeName = (e: any) => {
    setPatientName(e.target.value);
    setPatients(
      e.target.value.trim() == ""
        ? []
        : find(
            {
              field: "name",
              condition: e.target.value.trim(),
            },
            patientsState
          )
    );
  };
  const handleChangePhone = (e: any) => {
    setPhoneNumber(e.target.value);
    setPatients(
      e.target.value.trim() == ""
        ? []
        : find(
            {
              field: "phoneNumber",
              condition: e.target.value.trim(),
            },
            patientsState
          )
    );
  };
  const handleSubmit = () => {};
  const renderPatients = () => {
    return patients.map((patient) => {
      return <Patient fields={fields} entity={patient} openDetailEdit={true} />;
    });
  };
  return (
    <div className="patients page-index">
      <div className="doctors-input-container patients-input-container">
        <input
          type="text"
          name="patientName"
          id=""
          value={patientName}
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
      <div className="doctors-create create-button" onClick={openCreateModal}>
        <IoIosAddCircle />
      </div>
      <ul className="posts-doctor layout">{isFetched && renderPatients()}</ul>
      {isOpenCreateModal && (
        <Create
          fields={fields}
          handleSubmit={handleSubmit}
          closeCreateModal={closeCreateModal}
          initFields={[]}
        />
      )}
    </div>
  );
};

export default Patients;
