import { IEntityFormState } from "../../types";
import { IGuarantorForm } from "./types";

const initFormState: IEntityFormState<IGuarantorForm> = {
  open: false,
  isUpdating: false,
  data: {
    gender: "",
    name: "",
    surname: "",
    gsm: "",
    email: "",
    image: undefined,
    address: {
      street: "",
      zipcode: 0,
      city: "",
      country: "",
    },
  },
};

export default initFormState;
