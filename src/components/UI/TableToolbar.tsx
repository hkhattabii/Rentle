import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 8,
    marginRight: 8
  }
}))

interface TableToolbarProps {
    formOpen: boolean
    isUpdating: boolean
    handleInsert : () => void
    handleUpdate: () => void
    cancelUpdate: () => void
    onInsertUpdate: () => void
    onDelete: () => void
    selectedCount: number
}

export default function TableToolbar({formOpen, isUpdating, handleInsert, onInsertUpdate, handleUpdate, onDelete,cancelUpdate, selectedCount}:TableToolbarProps) {
  const classes = useStyles()
  return (
    <Grid container alignItems="center" component={Toolbar}>
      <Typography variant="h6" style={{ marginRight: 8 }}>
        {selectedCount} biens séléctionés
      </Typography>
      {
          selectedCount === 0 && !formOpen ?  (
              <Button variant="contained" color="primary" onClick={handleInsert} className={classes.button}>
                  Ajouter
              </Button>
          ) : [0,1].includes(selectedCount) && formOpen && (
            <Button variant="contained" color="primary" onClick={onInsertUpdate} className={classes.button}>
              Valider
            </Button>
          )
      }
      {selectedCount === 1 && !isUpdating ? (
        <Button variant="contained" color="secondary" onClick={handleUpdate} className={classes.button}>
          Modifier
        </Button>
      ) : selectedCount === 1 && isUpdating && (
        <Button variant="contained" color="secondary" onClick={cancelUpdate} className={classes.button}>
          Anuller
        </Button>
      )}
      {selectedCount > 0 && (
        <Button
          variant="contained"
          style={{ color: "white", background: "red" }}
          onClick={onDelete}
          className={classes.button}
        >
          Supprimer
        </Button>
      )}
    </Grid>
  );
}
