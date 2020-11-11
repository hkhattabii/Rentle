import { MenuItem, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, { Dispatch, SetStateAction } from "react";
import { IEntityFormState, IFetchState, IGuarantor, IProperty } from "../../types";
import ImageUploader from "../UI/ImageUploader";
import Input from "../UI/Input";
import Select from "../UI/Select";
import SelectAsync from "../UI/SelectAsync";
import { IOccupantForm } from "./types";


interface OccupantFormProps {
  form: IEntityFormState<IOccupantForm>;
  setForm: Dispatch<SetStateAction<IEntityFormState<IOccupantForm>>>;
}

export default function OccupantForm({ form, setForm }: OccupantFormProps) {
  const [guarantors, setGuarantors] = React.useState<IFetchState<IGuarantor[]>>({ loading: false, data: undefined });
  const [guarantorSelected, setGuarantorSelected] = React.useState<IGuarantor | undefined>(undefined)


  const handleOccupantChange = (name: string, value: any) =>
    setForm({ ...form, data: { ...form.data, [name]: value } });
  const handleLocationChange = (name: string, value: any) =>
    setForm({
      ...form,
      data: { ...form.data, address: { ...form.data.address, [name]: value } },
    });
  const handleFileChange = (file: File) =>
    setForm({ ...form, data: { ...form.data, image: file } });

  return (
    <TableRow>
      <TableCell />
      <TableCell align="center">
        <ImageUploader onUpload={handleFileChange} />
      </TableCell>
      <TableCell align="center">
        <Select
          name="gender"
          data={["Homme", "Femme"]}
          currentValue={form.data.gender}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="name"
          variant="standard"
          value={form.data.name}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="surname"
          variant="standard"
          value={form.data.surname}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="email"
          variant="standard"
          value={form.data.email}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="gsm"
          variant="standard"
          value={form.data.gsm}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="nationalRegistry"
          variant="standard"
          value={form.data.nationalRegistry}
          onChange={handleOccupantChange}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="birthDate"
          variant="standard"
          type="date"
          defaultValue="1999-27-10"
          value={form.data.birthDate}
          onChange={e => handleOccupantChange("birthDate", e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="street"
          variant="standard"
          value={form.data.address.street}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="zipcode"
          variant="standard"
          value={form.data.address.zipcode}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="city"
          variant="standard"
          value={form.data.address.city}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="country"
          variant="standard"
          value={form.data.address.country}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <SelectAsync
          data={guarantors.data}
          currentValue={
            guarantorSelected
              ? `${guarantorSelected.name} ${guarantorSelected.surname}`
              : ""
          }
          onDataFetched={(name, value) =>
            setGuarantors({ data: value, loading: false })
          }
          messageEmpty="Aucun garants"
        >
          {guarantors.data &&
            guarantors.data.map((guarantor) => (
              <MenuItem
                value={`${guarantor.name} ${guarantor.surname}`}
                key={guarantor.id}
                onClick={() => {
                  setGuarantorSelected(guarantor)
                  handleOccupantChange("guarantorID", guarantor.id)
                }}
              >
                {`${guarantor.name} ${guarantor.surname}`}
              </MenuItem>
            ))}
        </SelectAsync>
      </TableCell>
    </TableRow>
  );
}
