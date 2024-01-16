import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { useFetchData } from "../../hooks/useFethData";
import { getTreatmentPlanOfPatients } from "../../../redux/actions/treatmentPlan-actions";
import ViewDetail from "../ViewDetail";
import { Field } from "../interfaces";
import Overview from "../Overview";

const TreatmentPlans = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getTreatmentPlanOfPatients(user!.id));
  });
  const treatmentPlans = useSelector(
    (state: RootState) => state.treatmentPlan.treatmentPlans
  );
  console.log(treatmentPlans);
  const treatmentPlanFields: Field[] = [
    {
      fieldName: "doctorId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "doctorName",
      fieldDisplay: "Bác sĩ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: (id) => {
        return <ViewDetail patientId={null} doctorId={id} />;
      },
    },
    {
      fieldName: "patientId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "patientName",
      fieldDisplay: "Bệnh nhân",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "treatmentMethod",
      fieldDisplay: "Kế hoạch điều trị",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "textarea",
      viewDetail: null,
    },
    {
      fieldName: "lastExaminationDay",
      fieldDisplay: "Ngày khám gần nhất",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "nextExpectedExaminationDay",
      fieldDisplay: "Ngày khám dự kiến tiếp theo",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "note",
      fieldDisplay: "Ghi chú",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "textarea",
      viewDetail: null,
    },
    {
      fieldName: "medicalRecordId",
      fieldDisplay: "",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
  ];
  const handleDelete = () => {};
  const handleSubmit = () => {};
  const renderTM = () => {
    return treatmentPlans.map((tm) => {
      return (
        <Overview
          fields={treatmentPlanFields}
          entity={tm}
          handleDelete={handleDelete}
          openDetailEdit={false}
          handleSubmit={handleSubmit}
        />
      );
    });
  };
  return (
    <div className="page-index">
      <ul className="treatment_plans layout">{isFetched && renderTM()}</ul>
    </div>
  );
};

export default TreatmentPlans;