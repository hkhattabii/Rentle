import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { IGuarantor, IProperty } from "../../types";

type PropertyCellProps =  {
    guarantor: IGuarantor
    onSelect: (currentValue: boolean, propertySelected: string) => void
    selected?: boolean
}

export default function GurantorCell({onSelect, selected, guarantor}: PropertyCellProps) {
  return (
    <TableRow
      style={{
        backgroundColor: selected ? "rgba(0,0,0,0.2)" : "initial",
      }}
    >
      <TableCell style={{ alignItems: "center", justifyContent: "center" }}>
        <Checkbox
          checked={selected}
          onChange={(e, checked) => onSelect(checked, guarantor.id)}
        />
      </TableCell>
      <TableCell align="center">
        <img
          alt={`guarantor-${guarantor.id}`}
          src={guarantor.image as string}
          width="64"
          height="64"
        />
      </TableCell>
      <TableCell align="center">{guarantor.gender}</TableCell>
      <TableCell align="center">{guarantor.name}</TableCell>
      <TableCell align="center">{guarantor.surname}</TableCell>
      <TableCell align="center">{guarantor.email}</TableCell>
      <TableCell align="center">{guarantor.gsm}</TableCell>
      <TableCell align="center">{guarantor.address.street}</TableCell>
      <TableCell align="center">{guarantor.address.zipcode}</TableCell>
      <TableCell align="center">{guarantor.address.city}</TableCell>
      <TableCell align="center">{guarantor.address.country}</TableCell>
      <TableCell align="center">
        <Avatar alt="tqt" src={guarantor.occupant && guarantor.occupant.image} />
      </TableCell>
    </TableRow>
  );
}
