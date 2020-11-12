import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavItem from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { IAlarmHubState } from "../../store/types";

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
      <NavItem label="Bails" to="/leases" />
      <NavItem label="Notifications" to="/properties" />
      <NavItem label="Génération" to="/generations" />
    </header>
  );
}
