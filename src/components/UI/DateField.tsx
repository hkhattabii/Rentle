import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker,} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));



type DateFieldProps = {
  name?: string;
  value: string | undefined;
  disabled?: boolean;
  onChange: (value: string | unknown, name: string) => void;
};

const DateField: React.FC<DateFieldProps> = ({name,value,disabled,onChange}) => {
  const classes = useStyles()

  const handleChange = (date: Date | null) => {
    onChange(date, name ? name : "");
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        name={name}
        format="dd/MM/yyyy"
        margin="dense"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        fullWidth
        className={classes.root}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;
