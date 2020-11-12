import { WithImage } from "./hooks/types";


export interface IDocument  {
    id: string
}
export interface ILocation {
    street: string,
    zipcode: string,
    city: string,
    country: string,
}

interface IPerson extends IDocument {
    gender: string,
    name: string,
    surname: string,
    email: string,
    gsm: string,
    image: string,
    address: ILocation
}

export interface IGuarantor extends IPerson {
    occupant: IOccupant
}

export interface IOccupant extends IPerson {
    id: string, 
    nationalRegistry: string,
    birthDate: string,
    guarantor: IGuarantor,
    propertyLeased: IProperty | undefined
    lease: ILease | undefined
}

export interface IProperty extends IDocument {    
    image: string,
    type: string,
    size: number,
    sizeLivingRoom: number,
    sizeKitchen: number,
    sizeBedrooms: number,
    bedrooms: number[],
    bedroomCount: number,
    floorNumber: number,
    price: number,
    charges: number,
    address: ILocation,
    leasedBy: IOccupant
}

export interface ILease extends IDocument {
    beginDate: string,
    endDate: string,
    visitBeginDate: string,
    visitEndDate: string
    warranty: number,
    signatureDate: string,
    isDepositPaid: boolean,
    depositDate: string | undefined,
    index: number,
    isFirstMonthPaid: boolean,
    gasMeter: IMeter,
    waterMeter: IMeter,
    electricityMeter: IMeter,
    alarmDate: string,
    property: IProperty,
    occupant: IOccupant
}


export interface IMeter {
    beginValue: number,
    endValue?: number | undefined
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

export interface IEntityFormState<TForm> {
    open: boolean,
    isUpdating: boolean,
    data: TForm
}


export interface ITableColumn {
    label: string,
    minWidth: number
}

