import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { IProperty } from "../../types";

type PropertyCellProps =  {
    property: IProperty
    onSelect: (currentValue: boolean, propertySelected: string) => void
    selected?: boolean
}

export default function PropertyCell({onSelect, selected, property}: PropertyCellProps) {
  return (
    <TableRow
      style={{
        backgroundColor: selected ? "rgba(0,0,0,0.2)" : "initial",
      }}
    >
      <TableCell style={{ alignItems: "center", justifyContent: "center" }}>
        <Checkbox
          checked={selected}
          onChange={(e, checked) => onSelect(checked, property.id)}
        />
      </TableCell>
      <TableCell align="center">
        <img
          alt={`property-${property.id}`}
          src={property.image as string}
          width="64"
          height="64"
        />
      </TableCell>
      <TableCell align="center">{property.type}</TableCell>
      <TableCell align="center">{property.size}</TableCell>
      <TableCell align="center">{property.sizeLivingRoom}</TableCell>
      <TableCell align="center">{property.sizeKitchen}</TableCell>
      <TableCell align="center">{property.sizeBedrooms}</TableCell>
      <TableCell align="center">{property.bedroomCount}</TableCell>
      <TableCell align="center">{property.floorNumber}</TableCell>
      <TableCell align="center">{property.price}</TableCell>
      <TableCell align="center">{property.charges}</TableCell>
      <TableCell align="center">{property.address.street}</TableCell>
      <TableCell align="center">{property.address.zipcode}</TableCell>
      <TableCell align="center">{property.address.city}</TableCell>
      <TableCell align="center">{property.address.country}</TableCell>
      <TableCell align="center">
        <Avatar alt="tqt" src={property.leasedBy && property.leasedBy.image} />
      </TableCell>
    </TableRow>
  );
}
