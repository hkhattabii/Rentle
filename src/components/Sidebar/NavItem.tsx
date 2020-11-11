import React, { PropsWithChildren } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navItem: {
    color: "white",
  },
}));

interface NavItemProps {
    label: string
    to: string
}

export default function NavItem({ label, to }: PropsWithChildren<NavItemProps> ) {
  const classes = useStyles();
  const history = useHistory()

  const toRoute = () => {
    history.push(to)
  }

  return (
    <ListItem button onClick={toRoute} className={classes.navItem} >
        <ListItemText primary={label}  />
    </ListItem>
  );
}
