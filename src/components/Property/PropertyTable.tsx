import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { IProperty } from "../../types";
import useGetDoc from "../../hooks/useGeDoc";
import PropertyHead from "./PropertyHead";
import PropertyCell from "./PropertyCell";
import PropertyForm from "./PropertyForm";
import TableToolbar from '../UI/TableToolbar'
import { IPropertyForm, IPropertyFormState } from "./types";
import initFormState from "./formState";
import useClient from "../../hooks/useClient";

interface PropertyTableProps {
  data: IProperty[] | undefined;
}

export default function PropertyTable({ data }: PropertyTableProps) {
  const [properties, setProperties] = React.useState(data);
  const [propertiesSelected, setPropertiesSelected] = React.useState<string[]>([])
  const [form, setForm] = React.useState<IPropertyFormState>(initFormState);
  const client = useClient()
  const {getDocID, getDocObjID} = useGetDoc()

  const onInsertUpdate = async () => {
    const updatedState = await client.insertUpdate<IPropertyForm, IProperty>({
      form: form.data,
      entities: properties,
      entity: "bien",
      isUpdating: form.isUpdating,
      uri: "/properties"
    })
    setProperties(updatedState)
    setForm(initFormState)
  }
  const onDelete = async () => {
    const updatedState = await client.delete<IProperty>({entityIDS: propertiesSelected, entities: properties, uri: "/properties"})
    setProperties(updatedState)
  } 

  const cancelUpdate = () => setForm({...form, open: false, isUpdating: false})
  const handleInsert = () => setForm({...form, open: true})
  const handleUpdate = () => {
    if (properties) {
      const property: IProperty | undefined  = getDocObjID(properties, propertiesSelected[0])
      if (property) setForm({data: property, open: true, isUpdating: true})
    }
  }

  const toggleSelect = (currentValue: boolean, propertieChecked: string) => {
    if (currentValue) setPropertiesSelected([...propertiesSelected, propertieChecked])
    else setPropertiesSelected(propertiesSelected.filter(propertieSelected => propertieSelected !== propertieChecked))
  }

  return (
    <Paper style={{width: '100%'}}>
      <TableToolbar 
        formOpen={form.open}
        isUpdating={form.isUpdating} 
        selectedCount={propertiesSelected.length} 
        handleInsert={handleInsert} 
        handleUpdate={handleUpdate}
        cancelUpdate={cancelUpdate}
        onInsertUpdate={onInsertUpdate}
        onDelete={onDelete} />
      <TableContainer style={{ height: "80vh" }}>
        <Table>
          <PropertyHead  />
          <TableBody>
            { form.open && !form.isUpdating && <PropertyForm form={form} setForm={setForm} />}
            {
              properties && properties.map((property: IProperty) => {
                const isSelected = getDocID(propertiesSelected, property.id)
                if (form.isUpdating && propertiesSelected[0] === property.id ) return <PropertyForm key={property.id} form={form} setForm={setForm} />
                return <PropertyCell key={property.id} selected={Boolean(isSelected)} onSelect={toggleSelect} property={property} />
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
