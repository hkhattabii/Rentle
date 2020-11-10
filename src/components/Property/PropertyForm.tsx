import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Select from "../UI/Select";
import Input from "../UI/Input";
import { Button } from "@material-ui/core";
import BedroomForm from "./BedroomForm";
import axios from "axios";
import useUploadImage from "../../hooks/useUploadImage";
import ImageUploader from "../UI/ImageUploader";
import { IAPIRES, IProperty } from "../../types";
import { message } from "antd";


interface PropertyFormProps {
  onInsert: (property: IProperty) => void
}

export default function PropertyForm({onInsert}: PropertyFormProps) {
  const uploadImageFile = useUploadImage()
  const [formOpen, setFormOpen] = React.useState(false)
  const [bedroomsOpen, setBedroomsOpen] = React.useState(false)
  const [imageFile, SetImageFile] = React.useState<File | undefined>(undefined)
  const [location, setLocation] = React.useState({
      street: "",
      zipcode: 0,
      city: "",
      country: "",
  })
  const [form, setForm] = React.useState({
    type: "Maison",
    size: 128,
    sizeLivingRoom: 32, 
    sizeKitchen: 16,
    floorNumber: 0,
    price: 1400,
    charges: 600,
    address: {}, 
    image: "",
    bedrooms: [],
    bedroomCount: 0
  })

  const handlePropertyChange = (name: string, value: string | number) => {
    setForm({...form, [name]: value})
  }

  const handleLocationChange = (name: string, value: string | number) => {
    setLocation({...location, [name]: value})
  }

  const handleFileChange = (file: File) => SetImageFile(file)

  const onSubmit = async (bedrooms: number[]) => {
    onClose()
    onFormClose()
    const fileURL = await uploadImageFile(imageFile)
    const body = {...form, address: location, bedrooms, image: fileURL}
    message.loading("Insertion du bien ...")
    const res: IAPIRES<IProperty> = (await axios.post("/properties", body)).data
    if (!res.success) message.error(res.message)
    else if (res.data) {
      message.success(res.message)
      onInsert(res.data)
    }

  }

  const onOpen = () => setBedroomsOpen(true)
  const onClose = () => setBedroomsOpen(false)
  const onFormOpen = () => setFormOpen(true)
  const onFormClose = () => setFormOpen(false)
 

  return (
    <TableRow>
      {bedroomsOpen && <BedroomForm open={bedroomsOpen} onClose={onClose} bedroomCount={form.bedroomCount} onSubmit={onSubmit}  />}
      <TableCell align="center">
        {formOpen ? (
          <Button variant="contained" color="primary" onClick={onOpen}>Ajouter</Button>
        ) : (
          <Button variant="contained" onClick={onFormOpen}>Nouveau</Button>
        )} 
      </TableCell>

      {
        formOpen && <React.Fragment><TableCell align="center">
        <ImageUploader onUpload={handleFileChange} />
      </TableCell>
      <TableCell align="center">
        <Select name="type" data={["Maison", "Appartement", "Chambre"]} currentValue={form.type} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="size" variant="standard" type="number" value={form.size} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="sizeLivingRoom" variant="standard" type="number" value={form.sizeLivingRoom} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="sizeKitchen" variant="standard" type="number" value={form.sizeKitchen} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center"></TableCell>
      <TableCell  align="center">
        <Input name="bedroomCount" variant="standard" type="number" value={form.bedroomCount} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="floorNumber" variant="standard" type="number" value={form.floorNumber} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="price" variant="standard" type="number" value={form.price} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="charges" variant="standard" type="number" value={form.charges} onChange={handlePropertyChange} />
      </TableCell>
      <TableCell align="center">
        <Input name="street" variant="standard" value={location.street} onChange={handleLocationChange}  />
      </TableCell>
      <TableCell align="center">
        <Input name="zipcode" variant="standard" value={location.zipcode} onChange={handleLocationChange}  />
      </TableCell>
      <TableCell align="center">
        <Input name="city" variant="standard" value={location.city} onChange={handleLocationChange}  />
      </TableCell>
      <TableCell align="center">
        <Input name="country" variant="standard" value={location.country} onChange={handleLocationChange}  />
      </TableCell></React.Fragment>

      }
      


      
    </TableRow>
  );
}
