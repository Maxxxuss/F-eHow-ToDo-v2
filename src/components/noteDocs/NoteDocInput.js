import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import * as React from "react";
import { connect } from "react-redux";

export const NoteDocInput = (props) => {
  const [docTitel, setDocTitel] = React.useState("Doc Name");
  const [docURL, setDocURL] = React.useState("Doc Link");
  const [docDescription, setDocDescription] = React.useState("Doc Description");

  const handeldocTitelChange = (event) => {
    setDocTitel(event.target.value);
  };

  const handeldocURLChange = (event) => {
    setDocURL(event.target.value);
  };

  const noteDocUpdates = {
    noteID: props.activeNoteID,
    docCategorie: props.categorie,
    docTitel: docTitel,
    docURL: docURL,
    docAdded: moment().format(), 
    docDescription: docDescription
  };



  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <TextField
          id="outlined-uncontrolled"
          label="Linke Titel"
          value={docTitel}
          onChange={(e) => setDocTitel(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          id="outlined-uncontrolled"
          label="Link URL"
          value={docURL}
          onChange={(e) => setDocURL(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          id="outlined-uncontrolled"
          label="Doc Description"
          value={docDescription}
          onChange={(e) => setDocDescription(e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          onClick={() => {
            props.editExpense(props.activeNoteID, 
              {docCounter:props.docCounter+1}
              )
            // props.editActiveNote({docCounter:props.docCounter+1})
            props.addNoteDoc(
              // props.activeNoteID,
              noteDocUpdates
            ),
              setDocURL(""),
              setDocTitel(""),
              setDocDescription("")
          }}
        >
          Add Document
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect("", "")(NoteDocInput);
