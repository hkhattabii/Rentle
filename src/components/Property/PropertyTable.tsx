import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { IProperty } from "../../types";
import {useGetDocID} from "../../hooks/useGeDoc";
import PropertyHead from "./PropertyHead";
import PropertyCell from "./PropertyCell";
import PropertyForm from "./PropertyForm";
import PropertyToolbar from "./PropertyToolbar";
import { IPropertyForm } from "./types";
import formState from "./formState";
import usePropertyClient from "../../hooks/usePropertyClient";

interface PropertyTableProps {
  data: IProperty[] | undefined;
}

export default function PropertyTable({ data }: PropertyTableProps) {
  const [properties, setProperties] = React.useState(data);
  const [propertiesSelected, setPropertiesSelected] = React.useState<string[]>([])
  const [formOpen, setFormOpen] = React.useState(false)
  const [form, setForm] = React.useState<IPropertyForm>(formState);
  const propertyClient = usePropertyClient()
  const getDoc = useGetDocID()

  const onInsert = async () => {
    setProperties(await propertyClient.insert(form, properties))
    setFormOpen(false)
  }
  const onDelete = async () => setProperties(await propertyClient.delete(propertiesSelected, properties))
  const handleInsert = () => setFormOpen(true)

  const toggleSelect = (currentValue: boolean, propertieChecked: string) => {
    if (currentValue) setPropertiesSelected([...propertiesSelected, propertieChecked])
    else setPropertiesSelected(propertiesSelected.filter(propertieSelected => propertieSelected !== propertieChecked))
  }

  return (
    <Paper style={{width: '100%'}}>
      <PropertyToolbar 
        formOpen={formOpen} 
        selectedCount={propertiesSelected.length} 
        handleInsert={handleInsert} 
        onInsert={onInsert}
        onDelete={onDelete} />
      <TableContainer style={{ height: "80vh" }}>
        <Table>
          <PropertyHead  />
          <TableBody>
            { formOpen && <PropertyForm form={form} setForm={setForm} />}
            {
              properties && properties.map((property: IProperty) => {
                const isSelected = getDoc(propertiesSelected, property.id)
                return <PropertyCell key={property.id} selected={Boolean(isSelected)} onSelect={toggleSelect} property={property} />
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
