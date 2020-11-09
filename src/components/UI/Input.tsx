import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import TextField, {TextFieldProps} from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    InputRoot: {
        marginTop:8,
        marginBottom: 8
    }
}))


function Input({label,type, ...props}: TextFieldProps) {
    const classes = useStyles()
    return (
        <TextField 
        variant="outlined" 
        label={label}
        type={type}  
        focused
        fullWidth
        className={classes.InputRoot}
        {...props}  
        />
            
    )
}

export default Input
