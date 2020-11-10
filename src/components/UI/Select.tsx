import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { default as MuiSelect } from "@material-ui/core/Select";

interface SelectProps {
  label: string;
  value: string;
  data: any[];
}

export default function Select({ label, value, data }: SelectProps) {
  return (
    <FormControl variant="outlined" focused fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect value={value} label={label}>
        {data.map((dataItem) => (
          <MenuItem value={dataItem}>{dataItem}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
