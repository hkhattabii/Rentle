import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default function GuarantorHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>avatar</TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>genre</TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          prénom
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          nom
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          email
        </TableCell>
        <TableCell align="center" style={{ minWidth: 32 }}>
          gsm
        </TableCell>
        <TableCell align="center" style={{ minWidth: 32 }}>
          rue
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          code postale
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          ville
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          pays
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          locataire
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
