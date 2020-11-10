import React from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Input from "../UI/Input";
import Select from "../UI/Select";



interface RealEstateFormProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RealEstateForm({ open, onClose }: RealEstateFormProps) {

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle>Insertion du bien <Button>Retour</Button></DialogTitle>
      <DialogContent>
        <Grid
          container
        >
          <Grid item container direction="column" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Select
              label="Type"
              data={["Maison", "Appartement", "Chambre"]}
              value="Maison"
            />
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
          <Grid item container alignItems="center" direction="column" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Button variant="contained">Ajouter une chambre</Button>
            <Button variant="contained" color="primary">Valider</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
