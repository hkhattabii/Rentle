import axios from "axios";
import { message } from "antd";
import useUploadImage from "./useUploadImage";
import { IPropertyForm } from "../components/Property/types";
import { IAPIRES, IProperty } from "../types";

export default function usePropertyClient() {
  const uploadImageFile = useUploadImage();

  return {
    delete: async function onDelete(
      propertyIDS: string[],
      properties: IProperty[] | undefined
    ) {
      message.loading("Suppression ...");
      const res = (
        await axios.delete<IAPIRES>("/properties", { data: propertyIDS })
      ).data;
      if (!res.success) {
        message.success(res.message);
        return;
      }
      message.success(res.message);
      return properties?.filter(
        (property) => !propertyIDS.includes(property.id)
      );
    },
    insertUpdate: async function (
      form: IPropertyForm,
      properties: IProperty[] | undefined,
      isUpdating: boolean
    ) {
      if (!properties) return;
      const fileURL = isUpdating && typeof form.image === "string" ? form.image :  await uploadImageFile(form.image);
      const body = { ...form, image: fileURL };
      isUpdating ? message.loading("Mise à jour du bien  ...") : message.loading("Insertion du bien ...");
      const res: IAPIRES<IProperty> = isUpdating
        ? (await axios.put("/properties", body)).data
        : (await axios.post("/properties", body)).data;
      if (!res.success) {
        message.error(res.message);
        return;
      } else if (res.data) {
        console.log(res.data)
        message.success(res.message);
        return isUpdating ? properties.map(property => res.data && property.id === res.data.id ? res.data : property)    : [...properties, res.data];
      }
    },
  };
}
