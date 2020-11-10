import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { default as MuiSelect } from "@material-ui/core/Select";

interface SelectProps {
  label?: string;
  currentValue: string;
  data: (string | number)[];
  name?: string
  onChange?: (name: string, value: string | number) => void
}

export default function Select({ label, currentValue, data, name, onChange }: SelectProps) {

  const handleChange = (e: React.ChangeEvent<{name?: string | undefined, value: unknown}>) => {
    const valueSelected = e.target.value

    if (typeof data[0] === "number" && name && onChange) onChange(name, valueSelected as number)
    else if (name && onChange) onChange(name, valueSelected as string)
  }


  return (
    <FormControl variant="outlined" focused fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect value={currentValue} label={label} onChange={handleChange}>
        {data.map((dataItem) => (
          <MenuItem value={dataItem} key={dataItem}>{dataItem}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
