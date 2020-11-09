import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { IRealEstate } from "../../types";
import realEstates from "../../constants/realEstates";


export default function RealEstateTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Taille (m²)</TableCell>
            <TableCell align="center">Taile salon (m²)</TableCell>
            <TableCell align="center">Taile cuisine (m²)</TableCell>
            <TableCell align="center">Taile chambres (m²)</TableCell>
            <TableCell align="center">Etage</TableCell>
            <TableCell align="center">Prix (€)</TableCell>
            <TableCell align="center">Charges {"\n"} (€)</TableCell>
            <TableCell align="center">Rue</TableCell>
            <TableCell align="center">Code postale</TableCell>
            <TableCell align="center">Ville</TableCell>
            <TableCell align="center">Pays</TableCell>
            <TableCell align="center">Locataire</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {realEstates.map((realEstate: IRealEstate) => (
            <TableRow>
              <TableCell align="center">
                <img src={realEstate.image} width="128" height="128" />
              </TableCell>
              <TableCell align="center">{realEstate.type}</TableCell>
              <TableCell align="center">{realEstate.size}</TableCell>
              <TableCell align="center">{realEstate.sizeLivingRoom}</TableCell>
              <TableCell align="center">{realEstate.sizeKitchen}</TableCell>
              <TableCell align="center">{realEstate.sizeBedrooms}</TableCell>
              <TableCell align="center">{realEstate.floorNumber}</TableCell>
              <TableCell align="center">{realEstate.price}</TableCell>
              <TableCell align="center">{realEstate.charges}</TableCell>
              <TableCell align="center">{realEstate.location.street}</TableCell>
              <TableCell align="center">
                {realEstate.location.zipcode}
              </TableCell>
              <TableCell align="center">{realEstate.location.city}</TableCell>
              <TableCell align="center">
                {realEstate.location.country}
              </TableCell>
              <TableCell align="center">
                <Avatar alt="tqt" src={realEstate.leasedBy.avatar} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
