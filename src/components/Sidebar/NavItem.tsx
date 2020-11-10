import React, { PropsWithChildren } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  navItem: {
    color: "white",
  },
}));

interface NavItemProps {
    label: string
}

export default function NavItem({ label }: PropsWithChildren<NavItemProps> ) {
  const classes = useStyles();
  return (
    <ListItem button className={classes.navItem}>
      <ListItemText primary={label} />
    </ListItem>
  );
}
