import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Input from '../UI/Input'



interface BedroomFormProps {
    open: boolean,
    onClose: () => void,
    onSubmit: (bedrooms: number[]) => void
    bedroomCount: number,
}
export default function BedroomForm({ open, onClose, onSubmit, bedroomCount } : BedroomFormProps) {
    const [bedrooms, setBedrooms] = React.useState<number[]>(new Array(bedroomCount).fill(0))

    const handleChange = (index: number, value: number) => {
        setBedrooms(bedrooms.map((bedroom, i) => i === index ? value : bedroom  ))
    }

    const handleSubmit = () => {
        onSubmit(bedrooms)
        onClose()
    }


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Ajout de {bedroomCount} chambres</DialogTitle>
            <DialogContent>
                {
                    bedrooms.map((bedroom, index) => (
                        <Input 
                        key={index}
                        variant="outlined"
                        name={`bedroom-${index}`}
                        type="number" 
                        label={`chambre ${index}`} 
                        value={bedroom}
                        onChange={(name, value) => handleChange(index, value as number) }
                        />
                    ))
                }
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit}>
                    Valider
                </Button>
            </DialogActions>
        </Dialog>
    )
}
