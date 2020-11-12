import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

import DateField from '../UI/DateField'


interface AlarmFormProps {
    open: boolean,
    onClose: () => void,
    alarm: string | undefined,
    onSubmit: (alarm: string | undefined) => void
}

export default function AlarmForm({open, onClose, alarm, onSubmit}: AlarmFormProps) {
    const [alarmState, setAlarmState] = React.useState<string | undefined>(alarm)


    
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Configuration de l'alarme</DialogTitle>
            <DialogContent>
            <DateField 
                value={alarmState}
                onChange={(value) => setAlarmState(value)}
            />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => onSubmit(alarmState)}>
                    Valider
                </Button>
            </DialogActions>
        </Dialog>
    )
}
