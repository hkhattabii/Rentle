import React from 'react'
import {default as MuiTableHead} from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface TableHeadProps {
    columns: string[]
}

export default function TableHead({columns}: TableHeadProps) {

    return (
        <MuiTableHead>
            <TableRow>
                <TableCell align="center"></TableCell>
                {
                    columns.map(column => <TableCell key={column} align="center" style={{ minWidth: 64}}>{column}</TableCell>)
                }
            </TableRow>
        </MuiTableHead>
    )
}
