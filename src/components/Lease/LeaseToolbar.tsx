import React from "react";
import Button from "@material-ui/core/Button";
import { ILease } from "../../types";

interface LeaseToolbarProps {
  filter: () => void;
  leaseAlarms: ILease[];
}

export default function LeaseToolbar({
  filter,
  leaseAlarms,
}: LeaseToolbarProps) {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "purple",
        color: "white",
        marginLeft: 4,
        marginRight: 4,
      }}
      onClick={filter}
    >
      Arrive à échéance ({leaseAlarms.length})
    </Button>
  );
}
