export interface IPropertyForm {
    image: File | string | undefined,
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
    [key: string] : string | number | ILocation | IOccupant
}

