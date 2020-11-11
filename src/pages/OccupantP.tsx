import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Table from '../components/UI/Table'
import columns from '../components/Occupant/columns'
import useClient from '../hooks/useClient'
import initOccupantState from '../components/Occupant/formState'
import { IFetchState, IOccupant } from '../types'
import OccupantForm from '../components/Occupant/OccupantForm';
import OccupantCell from '../components/Occupant/OccupantCell';

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



export default function OccupantP() {
    const classes = useStyles()
    const client = useClient()
    const [occupants, setOccupants] = React.useState<IFetchState<IOccupant[]>>({loading: true, data: undefined})

    React.useEffect(() => {
        const fetch = async () => {
            const data = await client.getAll<IOccupant>({uri: "/occupants"})
            setOccupants(o => {
                return {...o, loading: false, data}
            })
        }
        fetch()
    }, [])


    if (occupants.loading) return <p>Loading</p>



    return (
        <Grid container className={classes.occupantsList}>
            <Grid item container direction="column" alignItems="flex-start">
                <Table data={occupants.data} formState={initOccupantState} columns={columns} fetchUri="/occupants" entity="locataire">
                    {
                        (form, setForm) => (
                            <React.Fragment>
                                {
                                    form.open && !form.isUpdating && <OccupantForm form={form} setForm={setForm} />
                                }
                                {
                                    occupants.data && occupants.data.map(occupant => {
                                        return <OccupantCell key={occupant.id} onSelect={() => {}} occupant={occupant} />
                                    })
                                }
                            </React.Fragment>
                        )
                        
                    }
                </Table>
            </Grid>
        </Grid>
    )
}
