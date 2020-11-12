import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Table from "../components/UI/Table";
import useClient from "../hooks/useClient";
import { IFetchState, ILease } from "../types";
import initLeaseFormState from "../components/Lease/formState";
import leaseColumns from "../components/Lease/columns";
import LeaseCell from "../components/Lease/LeaseCell";
import LeaseForm from "../components/Lease/LeaseForm";

const useStyles = makeStyles((theme) => ({
  occupantsList: {
    backgroundColor: "#efefef",
    width: "100%",
    maxHeight: "100vh",
    overflowY: "hidden",
  },
  button: {
    marginBottom: 16,
  },
}));

export default function LeaseP() {
  const classes = useStyles();
  const client = useClient();
  const [leases, setLeases] = React.useState<IFetchState<ILease[]>>({
    loading: true,
    data: undefined,
  });

  React.useEffect(() => {
    const fetch = async () => {
      const data = await client.getAll<ILease>({ uri: "/leases" });
      setLeases({ loading: false, data });
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  if (leases.loading) return <p>Loading</p>;

  return (
    <Grid container className={classes.occupantsList}>
      <Grid item container direction="column" alignItems="flex-start">
        <Table
          data={leases.data}
          formState={initLeaseFormState}
          columns={leaseColumns}
          fetchUri="/leases"
          entity="bail"
        >
          {(
            form,
            setForm,
            toggleSelect,
            getDocID,
            leasesSelected,
            entities
          ) => (
            <React.Fragment>
              {
                form.open && !form.isUpdating && <LeaseForm form={form} setForm={setForm} />
              }
              {entities && 
                entities.map((lease) => {
                  console.log(lease)
                  const isSelected = getDocID(leasesSelected, lease.id)
                  if(form.open && form.isUpdating && leasesSelected[0] === lease.id) return <LeaseForm key={lease.id} form={form} setForm={setForm} />
                  return (
                    <LeaseCell
                      key={lease.id}
                      selected={Boolean(isSelected)}
                      onSelect={toggleSelect}
                      lease={lease}
                    />
                  );
                })}
            </React.Fragment>
          )}
        </Table>
      </Grid>
    </Grid>
  );
}
