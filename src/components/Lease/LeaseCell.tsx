import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Chip from '@material-ui/core/Chip'
import { ILease } from "../../types";
import useMoment, {useDiff} from "../../hooks/useMoment";

type LeaseCellProps =  {
    lease: ILease
    onSelect: (currentValue: boolean, propertySelected: string) => void
    selected?: boolean
}

export default function LeaseCell({onSelect, selected, lease}: LeaseCellProps) {
  const getDate = useMoment()
  const getDiff = useDiff()
  return (
    <TableRow
      style={{
        backgroundColor: selected ? "rgba(0,0,0,0.2)" : "initial",
      }}
    >
      <TableCell style={{ alignItems: "center", justifyContent: "center" }}>
        <Checkbox
          checked={selected}
          onChange={(e, checked) => onSelect(checked, lease.id)}
        />
      </TableCell>
      <TableCell align="center">{getDate(lease.beginDate)}</TableCell>
      <TableCell align="center">{getDate(lease.endDate)}</TableCell>
      <TableCell align="center">{`${getDiff(lease.beginDate, lease.endDate)} mois`}</TableCell>
      <TableCell align="center">{lease.index}</TableCell>
      <TableCell align="center">{lease.warranty}</TableCell>
      <TableCell align="center">{lease.signatureDate}</TableCell>
      <TableCell align="center">{`[${lease.waterMeter.beginValue};${lease.waterMeter.endValue}]`}</TableCell>
      <TableCell align="center">{`[${lease.gasMeter.beginValue};${lease.gasMeter.endValue}]`}</TableCell>
      <TableCell align="center">{`[${lease.electricityMeter.beginValue};${lease.electricityMeter.endValue}]`}</TableCell>
      <TableCell align="center">{lease.isDepositPaid}</TableCell>
      <TableCell align="center">{lease.depositDate}</TableCell>
      <TableCell align="center">{lease.isFirstMonthPaid}</TableCell>
      <TableCell align="center">{lease.visitBeginDate}</TableCell>
      <TableCell align="center">{lease.visitEndDate}</TableCell>
      <TableCell align="center">{lease.visitEndDate}</TableCell>
      <TableCell align="center">
        <img
          alt={`lease-${lease.id}-property-${lease.property.id}`}
          src={lease.property.image as string}
          width="64"
          height="64"
        />
      </TableCell>
      <TableCell align="center">
        {
          <Avatar alt="tqt" src={lease.occupant.image} />
        }
      </TableCell>
    </TableRow>
  );
}
