import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Select from "../UI/Select";
import Input from "../UI/Input";
import {
  IEntityFormState,
  IFetchState,
  IOccupant,
  IProperty,
} from "../../types";
import ILeaseForm from "./types";
import DateField from "../UI/DateField";
import SelectAsync from "../UI/SelectAsync";
import { MenuItem } from "@material-ui/core";

interface LeaseFormProps {
  form: IEntityFormState<ILeaseForm>;
  setForm: React.Dispatch<React.SetStateAction<IEntityFormState<ILeaseForm>>>;
}

export default function LeaseForm({ form, setForm }: LeaseFormProps) {
  const [occupants, setOccupants] = React.useState<IFetchState<IOccupant[]>>({
    loading: true,
    data: undefined,
  });
  const [properties, setProperties] = React.useState<IFetchState<IProperty[]>>({
    loading: true,
    data: undefined,
  });
  const [occupantSelected, setOccupantSelected] = React.useState<
    IOccupant | undefined
  >(undefined);
  const [propertySelected, setPropertySelected] = React.useState<
    IProperty | undefined
  >(undefined);

  const handleChange = (name: string, value: any) =>
    setForm({ ...form, data: { ...form.data, [name]: value } });
  const handleWaterMeterChange = (name: any, value: any) => 
    setForm({ ...form, data: {...form.data, waterMeter: {beginValue: value}}})
  const handleGasMeterChange = (name: any, value: any) => 
    setForm({ ...form, data: {...form.data, gasMeter: {beginValue: value}}})
  const handleElectricityMeterChange = (name: any, value: any) => 
    setForm({ ...form, data: {...form.data, electricityMeter: {beginValue: value}}})

  return (
    <TableRow>
      <TableCell />
      <TableCell align="center">
        <DateField
          name="beginDate"
          value={form.data.beginDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center">
        <DateField
          name="endDate"
          value={form.data.endDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center" />
      <TableCell align="center">
        <Input
          name="index"
          variant="standard"
          type="number"
          value={form.data.index}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align="center" />
      <TableCell align="center">
        <DateField
          name="signatureDate"
          value={form.data.signatureDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="waterMeter"
          variant="standard"
          type="number"
          value={form.data.waterMeter.beginValue}
          onChange={handleWaterMeterChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="gasMeter"
          variant="standard"
          type="number"
          value={form.data.gasMeter.beginValue}
          onChange={handleGasMeterChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="electricityMeterBegin"
          variant="standard"
          type="number"
          value={form.data.electricityMeter.beginValue}
          onChange={handleElectricityMeterChange}
        />
      </TableCell>
      <TableCell align="center" />
      <TableCell align="center">
        <DateField
          name="depositDate"
          value={form.data.depositDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center">
        <Select
          data={["Oui", "Non"]}
          currentValue={form.data.isFirstMonthPaid}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align="center">
        <DateField
          name="visitBeginDate"
          value={form.data.visitBeginDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center">
        <DateField
          name="visitEndDate"
          value={form.data.visitEndDate}
          onChange={(value, name) => handleChange(name, value)}
        />
      </TableCell>
      <TableCell align="center">
        <SelectAsync
          data={properties.data}
          currentValue={propertySelected ? propertySelected.image : ""}
          onDataFetched={(value) =>
            setProperties({ data: value, loading: false })
          }
          fetchUri="/properties"
          messageEmpty="Aucun bien"
        >
          {properties.data &&
            properties.data.map((property) => (
              <MenuItem
                key={property.id}
                value={property.image}
                onClick={() => {
                  setPropertySelected(property);
                  handleChange("propertyID", property.id);
                }}
              >
                <img alt={`property-${property.id}`} src={property.image} width="64" height="64" />
              </MenuItem>
            ))}
        </SelectAsync>
      </TableCell>
      <TableCell align="center">
        <SelectAsync
          data={occupants.data}
          currentValue={
            occupantSelected
              ? `${occupantSelected.name} ${occupantSelected.surname}`
              : ""
          }
          onDataFetched={(value) =>
            setOccupants({ data: value, loading: false })
          }
          fetchUri="/occupants"
          messageEmpty="Aucun locataire"
        >
          {occupants.data &&
            occupants.data.map((occupant) => (
              <MenuItem
                key={occupant.id}
                value={`${occupant.name} ${occupant.surname}`}
                onClick={() => {
                  setOccupantSelected(occupant);
                  handleChange("occupantID", occupant.id);
                }}
              >
                {`${occupant.name} ${occupant.surname}`}
              </MenuItem>
            ))}
        </SelectAsync>
      </TableCell>
    </TableRow>
  );
}
