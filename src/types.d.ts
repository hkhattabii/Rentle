export interface ILocation {
    street: string,
    zipcode: string,
    city: string,
    country: string,
    Occupant: string
    [key: string]: string
}

export interface IOccupant {
    avatar: string
}

export interface IRealEstate {
    id: string,
    image: string,
    type: string,
    size: number,
    sizeLivingRoom: number,
    sizeKitchen: number,
    sizeBedrooms: number,
    floorNumber: number,
    price: number,
    charges: number,
    location: ILocation,
    leasedBy: IOccupant
    [key: string] : string | number | ILocation | IOccupant
}