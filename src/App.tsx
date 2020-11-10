import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/Sidebar/Sidebar";
import Property from "./pages/Property";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100vh",
    width: "100%",
    maxHeight: "100vh",
    maxWidth: "100%",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.app}>
      <CssBaseLine />
      <Property />
    </Grid>
  );
}
