import { Box, Chip, Grid, ListItem, Paper } from "@mui/material";
import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { DoubleCheckRemove } from "./doubleCheckRemoveNoteDoc";

export const NoteDocView = (props) => {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const handelRemoveNote = (props) => {
  //   props.handelRemoveNote({ id: props.activeNote.id });
  //   handleClose();
  // };

  return (
    <Box>
      <Paper
        sx={{
          m: 2,
          width: "98%",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {props.noteDocs.map((noteDoc) => {
            if (
              props.activeNoteID != "" &&
              noteDoc.noteID === props.activeNoteID
            ) {
              return (
                <Grid item key={noteDoc.id}>
                  <ListItem key={noteDoc.id}>
                    <a href={noteDoc.docURL} target="_blank">
                      <Chip label={noteDoc.docTitel.substring(0, 30)} />
                    </a>

                    <DoubleCheckRemove props={props} activeNoteDoc={noteDoc} />
                    {/* <IconButton
                      size="small"
                      color="primary"
                      onClick={ () =>
                      }

                        // props.editNoteDoc(
                        //   noteDoc.id,
                        //   {noteID:"" }

                        // )

                        // console.log("props Chop: ", props)
                      }
                    >
                      <ClearIcon></ClearIcon>
                    </IconButton> */}
                  </ListItem>
                </Grid>
              );
            } else {
              return "";
            }
          })}
        </Grid>
      </Paper>
    </Box>
  );
};
