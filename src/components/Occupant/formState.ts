import { IEntityFormState } from '../../types'
import { IOccupantForm } from './types'


const initOccupantState: IEntityFormState<IOccupantForm> = {
    open:false,
    isUpdating: false,
    data: {
        gender: "Homme",
        name: "",
        surname: "",
        gsm: "",
        email: "",
        image: undefined,
        nationalRegistry: "",
        birthDate: "",
        address: {
          street: "",
          zipcode: 0,
          city: "",
          country: "",
        },
        guarantorID: "",
        propertyID: undefined
    }
}

export default initOccupantState