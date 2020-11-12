import { WithImage } from "../../hooks/types";

export interface IPropertyForm extends WithImage {
    type: string,
    size: number,
    sizeLivingRoom: number,
    sizeKitchen: number,
    bedrooms: number[]
    bedroomCount: number
    floorNumber: number,
    price: number,
    charges: number,
    address: ILocation,
    occupantID: string | undefined
    [key: string] : string | number | ILocation | IOccupant
}


export interface IPropertyFormState<EntityForm extends WithImage> {
    open: boolean,
    isUpdating: boolean,
    data: EntityForm
}
