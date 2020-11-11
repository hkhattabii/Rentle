import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import NavItem from "./NavItem";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <header className={classes.sidebar}>
      <NavItem label="Biens" to="/properties" />
      <NavItem label="Guarants" to="/guarantors" />
      <NavItem label="Locataires" to="/occupants" />
      <NavItem label="Bails" to="/properties" />
      <NavItem label="Notifications" to="/properties" />
      <NavItem label="Génération" to="/generations" />
    </header>
  );
}
