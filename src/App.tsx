import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Routes from "./Routes";
import useSignalR from "./hooks/useSignalR";

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));

export default function App() {
  const classes = useStyles();
  const start = useSignalR();;

  React.useEffect(() => {
    start()
  }, [])

  




  return (
    <Grid container className={classes.app}>
      <CssBaseLine />
      <Routes />
    </Grid>
  );
}
