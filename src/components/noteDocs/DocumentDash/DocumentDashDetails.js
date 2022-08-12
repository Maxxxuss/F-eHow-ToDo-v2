import {
  List,
  Box,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Grid,
  ListItem,
  ButtonGroup,
  TextField,
  IconButton,
  Button,
  Autocomplete,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../../Button/DoubleCheckRemoveButton";
import { DoubleCheckDelete } from "../doubleChecDeleteNoteDoc";

export function DocDashDetails(props) {
  const DocDetail = props;

  const editDoc = props.showDocuDashPROPS.editNoteDoc;
  const removeNoteDoc = props.showDocuDashPROPS.removeNoteDoc;
  const activeNoteDoc = props.activeNoteDoc;

  const [docID, setDocID] = React.useState(props.activeNoteDoc.id);
  const [docTitel, setDocTitel] = React.useState(
    props.activeNoteDoc.docTitel === "" ? props.activeNoteDoc.docTitel : ""
  );

  const [docURL, setDocURL] = React.useState(
    props.activeNoteDoc.docURL === "" ? props.activeNoteDoc.docURL : ""
  );
  const [docDescription, setDocDescription] = React.useState(
    props.activeNoteDoc.docDescription === ""
      ? props.activeNoteDoc.docDescription
      : ""
  );

  const [docAdded, setDocAdded] = React.useState(
    props.activeNoteDoc.docAdded === "" ? props.activeNoteDoc.docAdded : ""
  );

  const [activeCategorie, setActiveCategorie] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  const handeldocTitelChange = (event) => {
    setDocTitel(event.target.value);
  };

  const handeldocURLChange = (event) => {
    setDocURL(event.target.value);
  };

  const handelDocDescription = (event) => {
    setDocDescription(event.target.value);
  };

  const noteDocUpdates = {
    noteID: "",
    docCategorie: inputCategorie
      ? inputCategorie
      : props.showDocuDashPROPS.activeCategorie.catName,
    docTitel: docTitel,
    docURL: docURL,
    docAdded: moment().format(),
    docDescription: docDescription,
    noteID: props.activeNoteDoc.noteID,
  };

  if (docID != props.activeNoteDoc.id) {
    setDocID(props.activeNoteDoc.id);
    setDocDescription(props.activeNoteDoc.docDescription),
      setDocTitel(props.activeNoteDoc.docTitel),
      setDocURL(props.activeNoteDoc.docURL);

    setDocAdded(props.activeNoteDoc.docAdded);
    setInputCategorie("");
    setActiveCategorie("");
  }

  return (
    <Box>
      <Box mb={2} mt={1}>
        <Grid item >
          <ButtonGroup fullWidth={true}
          //  variant="contained" size="small"
           >
            <Button
              color="primary"
              onClick={() => {
                setDocTitel("");
                setActiveCategorie("");
                setDocURL("");
                setDocDescription("");
                setDocAdded("");
                setActiveCategorie("");
              }}
            >
              clear
            </Button>
            {docAdded === "" ? (
              <Button
                color="primary"
                onClick={() =>
                  props.showDocuDashPROPS.props.addNoteDoc(noteDocUpdates)
                }
              >
                Add
              </Button>
            ) : (
              <Button
                color="primary"
                onClick={() =>
                  props.showDocuDashPROPS.props.editNoteDoc(
                    props.activeNoteDoc.id,
                    noteDocUpdates
                  )
                }
              >
                Edit
              </Button>
            )}

            <Button
              color="primary"
              onClick={() =>
                console.log(
                  "DocDashDetails Props: ",
                  inputCategorie,
                  "a",
                  activeCategorie,
                  "active cat Prop",
                  props,
                  "geProps",
                  props
                )
              }
            >
              SHOW- PROPS
            </Button>

            <DoubleCheckDelete props={props} />
          </ButtonGroup>
        </Grid>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={7}>
          <TextField
            fullWidth={true}
            label="Doc Titel "
            value={docTitel}
            onChange={(e) => setDocTitel(e.target.value)}
          />
        </Grid>

        <Grid item xs={5}>
          <Autocomplete
            value={activeCategorie}
            onChange={(e, newValue) => {
              setActiveCategorie(newValue);
            }}
            inputValue={inputCategorie}
            onInputChange={(e, newInputValue) => {
              setInputCategorie(newInputValue);
            }}
            options={props.showDocuDashPROPS.props.categories}
            getOptionLabel={(option) => (option.catName ? option.catName : "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Project"
                variant="filled"
                color="secondary"
              />
            )}
          />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button href={docURL} color="primary" target="_blank">
              Open-Link
            </Button>
          </Grid>
          <Grid item xs={9} mt={2}>
            <TextField
              fullWidth={true}
              label="Doc URL"
              value={docURL}
              onChange={(e) => setDocURL(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              fullWidth={true}
              multiline={true}
              label="Doc Description"
              value={docDescription}
              onChange={(e) => setDocDescription(e.target.value)}
            />
          </Grid>

          {/* <div>
            <IconButton
              onClick={() => <a href={docURL} target="_blank"></a>}
              size="large"
              color="primary"
            >
              <ClearIcon fontSize="large" />
            </IconButton>
          </div> */}
        </Grid>
      </Grid>
    </Box>
  );
}
