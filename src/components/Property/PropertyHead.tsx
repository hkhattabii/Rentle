import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default function PropertyHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center">Image</TableCell>
        <TableCell align="center">Type</TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Taille (m²)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          salon (m²)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          cuisine (m²)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 32 }}>
          chambres (m²)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 32 }}>
          chambres
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Etage
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Prix (€)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Charges {"\n"} (€)
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Rue
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Code postale
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Ville
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Pays
        </TableCell>
        <TableCell align="center" style={{ minWidth: 128 }}>
          Locataire
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
