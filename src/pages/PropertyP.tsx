import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Table from "../components/UI/Table";
import initPropertyForm from '../components/Property/formState'
import useClient from "../hooks/useClient";
import { IFetchState, IProperty } from "../types";
import propertyColumns from "../components/Property/columns";
import PropertyForm from "../components/Property/PropertyForm";
import PropertyCell from "../components/Property/PropertyCell";

const useStyles = makeStyles((theme) => ({
  propertyList: {
    backgroundColor: "#efefef",
    width: "100%",
    maxHeight: "100vh",
    overflowY: "hidden",
  },
  button: {
    marginBottom: 16
  }
}));

export default function PropertyP() {
  const classes = useStyles();
  const client = useClient()
  const [properties, setProperties] = React.useState<IFetchState<IProperty[]>>({loading: true, data: undefined})

  React.useEffect(() => {
    const fetch = async () => {
      const fetchedProperties = await client.getAll<IProperty>({uri: "/properties"})
      setProperties({loading: false, data: fetchedProperties})
    }
    fetch()
  // eslint-disable-next-line
  }, [])


  if (properties.loading) return <p>Loading</p>


  return (
    <Grid container className={classes.propertyList}>
      <Grid item container direction="column" alignItems="flex-start">
        <Table data={properties.data} formState={initPropertyForm} columns={propertyColumns} fetchUri="/properties" entity="bien"  >
          {
            (form, setForm, toggleSelect, getDocID, propertiesSelected, entities) => (
              <React.Fragment>
                {
                  form.open && !form.isUpdating && <PropertyForm form={form} setForm={setForm} />
                }
                {
                  entities && entities.map(property => {
                    const isSelected = getDocID(propertiesSelected, property.id)
                    if (form.isUpdating && propertiesSelected[0] === isSelected) return <PropertyForm key={property.id} form={form} setForm={setForm} />
                    return <PropertyCell key={property.id} selected={Boolean(isSelected)} onSelect={toggleSelect} property={property} />
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
