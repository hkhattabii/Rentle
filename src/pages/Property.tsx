import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import PropertyTable from '../components/Property/PropertyTable'
import { IFetchState, IProperty } from "../types";

const useStyles = makeStyles((theme) => ({
  realEstateList: {
    backgroundColor: "#efefef",
    width: "100%",
    maxHeight: "100vh",
    overflowY: "hidden",
  },
  button: {
    marginBottom: 16
  }
}));

export default function RealEstateListP() {
  const classes = useStyles();
  const [realEstates, setRealEstates] = React.useState<IFetchState<IProperty[]>>({loading: true, data: undefined})

  React.useEffect(() => {
    const fetch = async () => {
      const res = (await axios.get<IProperty[]>("/properties")).data
      setRealEstates(r => {
        return {...r, loading: false, data: res}
      })
    }
    fetch()
  }, [])


  if (realEstates?.loading) return <p>Loading</p>


  return (
    <Grid container className={classes.realEstateList}>
      <Grid item container direction="column" alignItems="flex-start">
        <PropertyTable data={realEstates.data} />
      </Grid>
    </Grid>
  );
}
