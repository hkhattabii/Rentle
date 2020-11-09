import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    realEstateList: {
        height: '100%',
        backgroundColor: "#efefef"
    }
}))

export default function RealEstateListP() {
    const classes = useStyles()
    return (
        <Grid container className={classes.realEstateList}>
            cc
        </Grid>
    )
}
