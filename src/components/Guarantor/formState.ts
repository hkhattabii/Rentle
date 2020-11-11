import { IGuarantorFormState } from "./types";

const initState: IGuarantorFormState = {
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

export default initState;
