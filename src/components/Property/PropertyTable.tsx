import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox'
import { message } from "antd";
import { IAPIRES, IProperty } from "../../types";
import RealEstateForm from "./PropertyForm";

import axios from 'axios'


interface PropertyTableProps {
  data: IProperty[] | undefined
}

export default function PropertyTable({data}: PropertyTableProps) {
  const [properties, setProperties ] = React.useState(data)

  const onDelete = async (id: string) => {
    message.loading("Suppresion du bien ...")
    const res = (await axios.delete<IAPIRES>(`/properties/${id}`)).data
    if (res.success) {
      setProperties(properties?.filter(property => property.id !== id))
      message.success(res.message)
      return
    }
    message.error(res.message)
  }

  const onInsert = (realEstate: IProperty) => {
    properties && setProperties([...properties, realEstate])
  }

  return (
    <TableContainer component={Paper} style={{height: "80vh"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Taille (m²)</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>salon (m²)</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>cuisine (m²)</TableCell>
            <TableCell align="center" style={{minWidth: 32}}>chambres (m²)</TableCell>
            <TableCell align="center" style={{minWidth: 32}}>chambres</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Etage</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Prix (€)</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Charges {"\n"} (€)</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Rue</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Code postale</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Ville</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Pays</TableCell>
            <TableCell align="center" style={{minWidth: 128}}>Locataire</TableCell>
            <TableCell align="right" style={{minWidth: 128}}>Actions</TableCell>
            <TableCell align="center" style={{minWidth: 128}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RealEstateForm  onInsert={onInsert} />
          {properties && properties.map((realEstate: IProperty) => (
              <TableRow key={realEstate.id}>
                <TableCell>
                  <Checkbox checked={false} onChange={() => {}} />
                </TableCell>
                <TableCell align="center">
                  <img alt={`property-${realEstate.id}`} src={realEstate.image as string} width="64" height="64" />
                </TableCell>
                <TableCell align="center">{realEstate.type}</TableCell>
                <TableCell align="center">{realEstate.size}</TableCell>
                <TableCell align="center">{realEstate.sizeLivingRoom}</TableCell>
                <TableCell align="center">{realEstate.sizeKitchen}</TableCell>
                <TableCell align="center">{realEstate.sizeBedrooms}</TableCell>
                <TableCell align="center">{realEstate.bedroomCount}</TableCell>
                <TableCell align="center">{realEstate.floorNumber}</TableCell>
                <TableCell align="center">{realEstate.price}</TableCell>
                <TableCell align="center">{realEstate.charges}</TableCell>
                <TableCell align="center">{realEstate.address.street}</TableCell>
                <TableCell align="center">
                  {realEstate.address.zipcode}
                </TableCell>
                <TableCell align="center">{realEstate.address.city}</TableCell>
                <TableCell align="center">
                  {realEstate.address.country}
                </TableCell>
                <TableCell align="center">
                  <Avatar alt="tqt" src={realEstate.leasedBy && realEstate.leasedBy.avatar} />
                </TableCell>
                <TableCell align="center" style={{flexDirection: "row"}}>
                  <Button variant="contained" color="primary">Modifier</Button>
                </TableCell>
                <TableCell align="center" style={{flexDirection: "row"}}>
                  <Button variant="contained" color="primary" style={{color: "white", backgroundColor: "red"}} onClick={() => onDelete(realEstate.id)}>Supprimer</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
