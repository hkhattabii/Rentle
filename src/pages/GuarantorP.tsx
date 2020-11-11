import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import { IFetchState, IGuarantor } from "../types";
import Table from "../components/UI/Table";
import initFormState from "../components/Guarantor/formState";
import guarantorColumns from "../components/Guarantor/columns";
import GuarantorForm from "../components/Guarantor/GuarantorForm";
import GuarantorCell from "../components/Guarantor/GuarantorCell";

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
        <Table data={guarantors.data} formState={initFormState} columns={guarantorColumns} entity="guarant" fetchUri="/guarantors">
          {
            (form, setForm, toggleSelect, getDocID, guarantorsSelected, entities) => (
              <React.Fragment>
                {
                  form.open && !form.isUpdating && <GuarantorForm form={form} setForm={setForm} />
                }
                {
                  entities && entities.map(guarantor => {
                    const isSelected = getDocID(guarantorsSelected, guarantor.id)
                    if (form.isUpdating && guarantorsSelected[0] === guarantor.id) return <GuarantorForm key={guarantor.id} form={form} setForm={setForm} />
                    return <GuarantorCell key={guarantor.id}  selected={Boolean(isSelected)} onSelect={toggleSelect} guarantor={guarantor}  /> 
                  })
                }
              </React.Fragment>
            )
          }
        </Table>
      </Grid>
    </Grid>
  );
}
