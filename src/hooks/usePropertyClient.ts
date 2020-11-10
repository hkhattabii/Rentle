import axios from 'axios'
import { message } from "antd";
import useUploadImage from "./useUploadImage";
import { IPropertyForm } from "../components/Property/types";
import { IAPIRES, IProperty } from "../types";







export default function usePropertyClient() {
    const uploadImageFile = useUploadImage()
    
    return {
        delete: async function onDelete(propertyIDS: string[], properties: IProperty[] | undefined) {
            message.loading("Suppression ...")
            const res = (await axios.delete<IAPIRES>("/properties", {data: propertyIDS })).data
            if (!res.success) {
                message.success(res.message)
                return
            }
            message.success(res.message)
            return properties?.filter((property) => !propertyIDS.includes(property.id))
        },
        insert: async function(form: IPropertyForm, properties: IProperty[] | undefined) {
            if (!properties) return
            const fileURL = await uploadImageFile(form.image)
            console.log(fileURL)
            const body = { ...form, image: fileURL}
            message.loading("Insertion du bien ...")
            const res: IAPIRES<IProperty> = (await axios.post("/properties", body)).data
            if (!res.success) {
                message.error(res.message)
                return
            } else if (res.data) {
                message.success(res.message)
                return [...properties, res.data]
            }
        }
    }
}



