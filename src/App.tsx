import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/Sidebar/Sidebar";
import RealEstateListP from "./pages/RealEstateListP";

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
      <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
        <RealEstateListP />
      </Grid>
    </Grid>
  );
}
