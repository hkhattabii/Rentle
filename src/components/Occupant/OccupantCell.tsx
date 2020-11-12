import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from '@material-ui/core/Avatar'
import Chip from "@material-ui/core/Chip";
import { IOccupant } from "../../types";


type OccupantCellProps = {
  occupant: IOccupant;
  onSelect: (currentValue: boolean, propertySelected: string) => void;
  selected?: boolean;
};

export default function OccupantCell({
  occupant,
  onSelect,
  selected,
}: OccupantCellProps) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={selected}
          onChange={(e, checked) => onSelect(checked, occupant.id)}
        />
      </TableCell>
      <TableCell>
        <Avatar
          alt={`occupant-${occupant.id}`}
          src={occupant.image as string}
        />
      </TableCell>
      <TableCell align="center">{occupant.gender}</TableCell>
      <TableCell align="center">{occupant.name}</TableCell>
      <TableCell align="center">{occupant.surname}</TableCell>
      <TableCell align="center">{occupant.email}</TableCell>
      <TableCell align="center">{occupant.gsm}</TableCell>
      <TableCell align="center">{occupant.nationalRegistry}</TableCell>
      <TableCell align="center">{occupant.birthDate}</TableCell>
      <TableCell align="center">{occupant.address.street}</TableCell>
      <TableCell align="center">{occupant.address.zipcode}</TableCell>
      <TableCell align="center">{occupant.address.city}</TableCell>
      <TableCell align="center">{occupant.address.country}</TableCell>
      <TableCell align="center">
        {occupant.guarantor ? (
          <Avatar
            alt={`occupant-guarantor-${occupant.guarantor.id}`}
            src={occupant.guarantor.image as string}
          />
        ) : (
          <Chip label="Aucun" color="secondary" />
        )}
      </TableCell>
      <TableCell align="center">
        {occupant.propertyLeased ? (
          <img
            alt={`occupant-propertyLeased-${occupant.propertyLeased.id}`}
            src={occupant.propertyLeased.image as string}
            width="64"
            height="64"
          />
        ) : (
          <Chip label="Aucun" color="secondary" />
        )}
      </TableCell>
    </TableRow>
  );
}
