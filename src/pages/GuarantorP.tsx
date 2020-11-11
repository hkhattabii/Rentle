import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import { IFetchState, IGuarantor } from "../types";
import GuarantorTable from "../components/Guarantor/GuarantorTable";

const useStyles = makeStyles((theme) => ({
  guarantorList: {
    backgroundColor: "#efefef",
    width: "100%",
    maxHeight: "100vh",
    overflowY: "hidden",
  },
  button: {
    marginBottom: 16,
  },
}));

export default function GuarantorP() {
  const classes = useStyles()
  const [guarantors, setGuarantors] = React.useState<IFetchState<IGuarantor[]>>({loading: true, data: undefined})
  
  
  React.useEffect(() => {
    const fetch = async () => {
      const res = (await axios.get<IGuarantor[]>("/guarantors")).data
      setGuarantors(g => {
        return {...g, loading: false, data: res}
      })
    }
    fetch()
  }, [])
  

  if (guarantors.loading) return <p>Loading</p>


  return (
    <Grid container className={classes.guarantorList}>
      <Grid item container direction="column" alignItems="flex-start">
        <GuarantorTable data={guarantors.data} />
      </Grid>
    </Grid>
  );
}
