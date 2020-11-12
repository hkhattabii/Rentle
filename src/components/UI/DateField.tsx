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
  onClose?: () => void
  onChange: (value: string | undefined, name: string) => void;
};

const DateField: React.FC<DateFieldProps> = ({name,value,disabled,onClose, onChange}) => {
  const classes = useStyles()

  const handleChange = (date: Date | null) => {
    onChange(date?.toISOString(), name ? name : "");
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="dialog"
        name={name}
        format="dd/MM/yyyy"
        margin="dense"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        InputProps={{disabled: true}}
        onClose={onClose}
        fullWidth
        className={classes.root}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;
