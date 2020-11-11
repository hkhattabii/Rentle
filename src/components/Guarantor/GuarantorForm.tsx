import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Select from "../UI/Select";
import Input from "../UI/Input";
import ImageUploader from "../UI/ImageUploader";
import { IGuarantorFormState } from "./types";

interface GuarantorFormProps {
  form: IGuarantorFormState
  setForm: React.Dispatch<React.SetStateAction<IGuarantorFormState>>
}

export default function GuarantorForm({ form, setForm}: GuarantorFormProps) {

  const handleGuarantorChange = (name: string, value: any) => setForm({ ...form, data: {...form.data, [name]: value }  });
  const handleLocationChange = (name: string, value: any) => setForm({ ...form, data: {...form.data, address: {...form.data.address, [name]: value} }})
  const handleFileChange = (file: File) => setForm({ ...form, data: {...form.data, image: file}  })




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
          onChange={handleGuarantorChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="name"
          variant="standard"
          value={form.data.name}
          onChange={handleGuarantorChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="surname"
          variant="standard"
          value={form.data.surname}
          onChange={handleGuarantorChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="email"
          variant="standard"
          value={form.data.email}
          onChange={handleGuarantorChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input 
          name="gsm"
          variant="standard"
          value={form.data.gsm}
          onChange={handleGuarantorChange}
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
    </TableRow>
  );
}
