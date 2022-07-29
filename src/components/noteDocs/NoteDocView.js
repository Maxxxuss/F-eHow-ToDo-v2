import { Box, Button, Chip, Grid, List, ListItem, Paper } from "@mui/material";
import * as React from "react";

export const NoteDocView = (props) => {
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
                      <Chip label={noteDoc.docTitel.substring(0, 9)} />
                    </a>
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
