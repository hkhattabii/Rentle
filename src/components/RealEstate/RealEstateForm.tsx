import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "../UI/Input";

const useStyles = makeStyles((theme) => ({
  realEstateForm: ({ open }: { open: boolean }) => ({
    display: open ? "inherit" : "none",
    margin: "auto",
    padding: 32,
  }),
}));

interface RealEstateFormProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RealEstateForm({ open, onClose }: RealEstateFormProps) {
  const classes = useStyles({ open });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Insertion du bien</DialogTitle>
      <DialogContent>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          component={Paper}
          className={classes.realEstateForm}
        >
          <FormControl
            variant="outlined"
            focused
            fullWidth
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            <InputLabel>Type</InputLabel>
            <Select value="Maison" label="Type">
              <MenuItem value="Maison">Maison</MenuItem>
              <MenuItem value="Appartement">Appartement</MenuItem>
              <MenuItem value="Chambre">Chambre</MenuItem>
            </Select>
          </FormControl>
          <Input label="Taille" type="number" />
          <Input label="Taille du salon" type="number" />
          <Input label="Taille de la cuisine" type="number" />
          <Input label="étage" type="number" />
          <Input label="prix" type="number" />
          <Input label="charges" type="number" />
          <Input label="Rue" />
          <Input label="Code postal" />
          <Input label="Ville" />
          <Input label="Pays" />
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
