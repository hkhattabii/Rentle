import axios from "axios";
import { message } from "antd";
import useUploadImage from "./useUploadImage";
import { IAPIRES, IDocument } from "../types";
import { WithImage } from "./types";

interface DeleteParams<TEntity extends IDocument> {
  entityIDS: string[],
  entities: TEntity[] | undefined,
  uri: string
}

interface InsertUpdateParams<TForm extends WithImage, TEntity extends IDocument> {
  form: TForm,
  entities: TEntity[] | undefined
  entity: "guarant" | "bien"
  isUpdating: boolean,
  uri: string
}

export default function useGuarantorClient() {
  const uploadImageFile = useUploadImage();

  return {
    delete: async function onDelete<TEntity extends IDocument>({entityIDS, entities, uri}: DeleteParams<TEntity>) {
      message.loading("Suppression ...");
      const res = (
        await axios.delete<IAPIRES>(uri, { data: entityIDS })
      ).data;
      if (!res.success) {
        message.success(res.message);
        return;
      }
      message.success(res.message);
      return entities?.filter(
        (property) => !entityIDS.includes(property.id)
      );
    },
    insertUpdate: async function <TForm extends WithImage,TEntity extends IDocument>({form,entities,entity,isUpdating,uri}: InsertUpdateParams<TForm, TEntity>) {
      if (!entities) return;
      const fileURL = isUpdating && typeof form.image === "string" ? form.image :  await uploadImageFile(form.image);
      const body = { ...form, image: fileURL };
      isUpdating ? message.loading(`Mise à jour du ${entity}  ...`) : message.loading(`Insertion du ${entity} ...`);
      console.log(body)
      const res: IAPIRES<TEntity> = isUpdating
        ? (await axios.put(uri, body)).data
        : (await axios.post(uri, body)).data;
      if (!res.success) {
        message.error(res.message);
        return;
      } else if (res.data) {
        console.log("RES : ", res.data)
        message.success(res.message);
        return isUpdating ? entities.map(entity => res.data && entity.id === res.data.id ? res.data : entity)    : [...entities, res.data];
      }
    },
  };
}
