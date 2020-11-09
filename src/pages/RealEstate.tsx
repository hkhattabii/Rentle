import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import RealEstateTable from "../components/RealEstate/RealEstateTable";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  realEstateList: {
    backgroundColor: "#efefef",
    padding: 64,
    maxHeight: "100vh",
    overflowY: "auto",
  },
  button: {
    marginBottom: 16
  }
}));

export default function RealEstateListP() {
  const classes = useStyles();
  return (
    <Grid container className={classes.realEstateList}>
      <Grid item container direction="column" alignItems="flex-start" >
        <Button variant="contained" color="primary" className={classes.button}>Ajouter</Button>
        <RealEstateTable />
      </Grid>
    </Grid>
  );
}
