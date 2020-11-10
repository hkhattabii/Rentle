
export interface IDocument {
    id: string
}
export interface ILocation {
    street: string,
    zipcode: string,
    city: string,
    country: string,
    [key: string]: string
}

export interface IOccupant {
    avatar: string
}

export interface IProperty extends IDocument {    
    image: string,
    type: string,
    size: number,
    sizeLivingRoom: number,
    sizeKitchen: number,
    bedrooms: number[],
    bedroomCount: number,
    floorNumber: number,
    price: number,
    charges: number,
    address: ILocation,
    leasedBy: IOccupant
    [key: string] : string | number | ILocation | IOccupant
}

export interface IAPIRES<T = undefined> {
    success?: boolean,
    message?: string
    data?: T
}


export interface IFetchState<T> {
    loading: boolean
    data: T | undefined
}