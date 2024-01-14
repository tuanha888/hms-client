import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { useFetchData } from "../../hooks/useFethData";
import { getTreatmentPlanOfPatients } from "../../../redux/actions/treatmentPlan-actions";

const TreatmentPlans = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getTreatmentPlanOfPatients(user!.id));
  });
  return <div>TreatmentPlans</div>;
};

export default TreatmentPlans;
