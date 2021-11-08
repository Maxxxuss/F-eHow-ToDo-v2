import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DoubleCheckRemoveButton(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handelRemoveNote =() => {
    props.handelRemoveNote()
    handleClose()
}
    const propAcNote = props.activeNote

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Remove
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Soll die Note gelöscht werden?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                            Project: {propAcNote.categorie}

                    </DialogContentText>

                    <DialogContentText id="alert-dialog-description">

                            {propAcNote.description}

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handelRemoveNote} color="secondary" variant="contained" autoFocus>
                        Löschen
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
