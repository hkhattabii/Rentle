import { IOccupant, IEntityState } from "../../types";

export interface IPersonForm {
    gender: string,
    name: string,
    surname: string,
    email: string,
    gsm: string,
    image: File | string | undefined,
    address: ILocation,
    [key: string] : string |  ILocation 
}

export interface IOccupantForm extends IPersonForm {
    propertyID: string,
    nationalRegistry: string,
    birthDate: string,
    guarantor?: IGuarantorForm,
}

export interface IGuarantorForm extends IPersonForm {}

export interface IGuarantorFormState extends IEntityFormState {
    open: boolean;
    isUpdating: boolean;
    data: IGuarantorForm
}