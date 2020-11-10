import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    InputRoot: {
        marginTop:8,
        marginBottom: 8
    }
}))

interface InputProps {
    variant: "outlined" | "filled" | "standard"
    name?: string
    label?: string,
    type?: string,
    value?: string | number
    onChange?: (name: string, value: string | number) => void
}

function Input({variant,name, label,type,value, onChange}: InputProps) {
    const classes = useStyles()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (name && onChange && type === "number" && e.target.value !== "") onChange(e.target.name, parseInt(e.target.value))
        else if (name && onChange) onChange(e.target.name, e.target.value)
    }

    return (
        <TextField 
        variant={variant}
        name={name}
        label={label}
        type={type}  
        value={value}
        onChange={handleChange} 
        focused
        fullWidth
        className={classes.InputRoot}
        />
            
    )
}

export default Input
