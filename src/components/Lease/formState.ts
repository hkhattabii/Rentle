import { IEntityFormState } from "../../types";
import ILeaseForm from "./types";

const leaseFormState: IEntityFormState<ILeaseForm> = {
  open: false,
  isUpdating: false,
  data: {
    image: undefined,
    beginDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    index: 0,
    signatureDate: new Date().toISOString(),
    waterMeter: {
      beginValue: 0
    },
    gasMeter: {
      beginValue: 0
    },
    electricityMeter: {
      beginValue: 0
    },
    alarmDate: undefined,
    depositDate: undefined,
    isFirstMonthPaid: false,
    visitBeginDate: new Date().toISOString(),
    visitEndDate: new Date().toISOString(),
  },
};

export default leaseFormState;
