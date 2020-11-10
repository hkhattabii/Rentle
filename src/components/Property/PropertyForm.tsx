import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Select from "../UI/Select";
import Input from "../UI/Input";
import BedroomForm from "./BedroomForm";
import ImageUploader from "../UI/ImageUploader";
import { IPropertyForm } from "./types";
import { TextField } from "@material-ui/core";

interface PropertyFormProps {
  form: IPropertyForm
  setForm: React.Dispatch<React.SetStateAction<IPropertyForm>>
}

export default function PropertyForm({ form, setForm}: PropertyFormProps) {
  const [bedroomsOpen, setBedroomsOpen] = React.useState(false);

  const handlePropertyChange = (name: string, value: any) => setForm({ ...form, [name]: value });
  const handleLocationChange = (name: string, value: any) => setForm({ ...form, address: {...form.address, [name]: value}})
  const handleFileChange = (file: File) => setForm({ ...form, image: file})

  const onOpen = () => setBedroomsOpen(true)
  const onClose = () => setBedroomsOpen(false);



  return (
    <TableRow>
      {
        bedroomsOpen && <BedroomForm 
        open={bedroomsOpen} 
        onClose={onClose} 
        onSubmit={bedrooms => handlePropertyChange("bedrooms", bedrooms)}
        bedroomCount={form.bedroomCount} />
      }
      <TableCell />
      <TableCell align="center">
        <ImageUploader onUpload={handleFileChange} />
      </TableCell>
      <TableCell align="center">
        <Select
          name="type"
          data={["Maison", "Appartement", "Chambre"]}
          currentValue={form.type}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="size"
          variant="standard"
          type="number"
          value={form.size}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="sizeLivingRoom"
          variant="standard"
          type="number"
          value={form.sizeLivingRoom}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="sizeKitchen"
          variant="standard"
          type="number"
          value={form.sizeKitchen}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <TextField 
          name="bedroomSize"
          variant="standard"
          value={form.bedrooms.length > 0 ? form.bedrooms.reduce((accumulator, currentValue) => accumulator+ currentValue) : 0}
          onClick={onOpen}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="bedroomCount"
          variant="standard"
          type="number"
          value={form.bedroomCount}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="floorNumber"
          variant="standard"
          type="number"
          value={form.floorNumber}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="price"
          variant="standard"
          type="number"
          value={form.price}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="charges"
          variant="standard"
          type="number"
          value={form.charges}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="street"
          variant="standard"
          value={form.address.street}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="zipcode"
          variant="standard"
          value={form.address.zipcode}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="city"
          variant="standard"
          value={form.address.city}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="country"
          variant="standard"
          value={form.address.country}
          onChange={handleLocationChange}
        />
      </TableCell>
    </TableRow>
  );
}
