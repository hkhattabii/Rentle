import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import NavItem from "./NavItem";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <List className={classes.sidebar}>
        <NavItem label="Biens"  />
        <NavItem label="Locataires"  />
        <NavItem label="Bails"  />
        <NavItem label="Notifications"  />
        <NavItem label="Génération"  />
    </List>
  );
}
