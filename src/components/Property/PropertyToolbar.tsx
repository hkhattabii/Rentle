import React from "react";
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface PropertyToolbarProps {
    formOpen: boolean
    handleInsert : () => void
    onInsert: () => void
    onDelete: () => void
    selectedCount: number
}

export default function PropertyToolbar({formOpen, handleInsert, onInsert, onDelete, selectedCount}:PropertyToolbarProps) {
  return (
    <Grid container alignItems="center" component={Toolbar}>
      <Typography variant="h6" style={{ marginRight: 8 }}>
        {selectedCount} biens séléctionés
      </Typography>
      {
          selectedCount === 0 && !formOpen ?  (
              <Button variant="contained" color="primary" onClick={handleInsert}>
                  Ajouter
              </Button>
          ) : selectedCount === 0 && formOpen && (
            <Button variant="contained" color="primary" onClick={onInsert}>
              Valider
            </Button>
          )
      }
      {selectedCount === 1 && (
        <Button variant="contained" color="secondary">
          Modifier
        </Button>
      )}
      {selectedCount > 0 && (
        <Button
          variant="contained"
          style={{ color: "white", background: "red" }}
          onClick={onDelete}
        >
          Supprimer
        </Button>
      )}
    </Grid>
  );
}
