import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import * as React from "react";

import ClearIcon from "@mui/icons-material/Clear";

export function DoubleCheckDelete(props) {
  const activeNoteDoc = props.props.activeNoteDoc;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelRemoveNote = (props, activeNoteDoc) => {
    props.props.showDocuDashPROPS.props.removeNoteDoc({
      id: activeNoteDoc.id,
    });

    handleClose();
  };

  return (
    <div>
            
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Remove
      </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Soll die Note gelöscht werden?"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Added: {activeNoteDoc.docAdded}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Titel: {activeNoteDoc.docTitel}
            </DialogContentText>

            <DialogContentText id="alert-dialog-description">
              docURL: {activeNoteDoc.docURL}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => handelRemoveNote(props, activeNoteDoc) }
              color="error"
              variant="outlined"
              autoFocus
            >
              Löschen
            </Button>
          </DialogActions>
        </Dialog>

    </div>
  );
}
