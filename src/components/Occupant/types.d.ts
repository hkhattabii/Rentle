import { IEntityFormState, IGuarantor } from "../../types";
import { IPersonForm } from "../Guarantor/types"

export interface IOccupantForm extends IPersonForm {
    propertyID: string | undefined,
    guarantorID: string,
    nationalRegistry: string,
    birthDate: string,
}