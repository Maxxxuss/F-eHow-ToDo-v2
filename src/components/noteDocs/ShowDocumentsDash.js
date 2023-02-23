import {
  List,
  Box,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Grid,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { DocDashDetails } from "./DocumentDash/DocumentDashDetails";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import InfoIcon from "@mui/icons-material/Info";

import Filter2Icon from "@mui/icons-material/Filter2";

export function ShowDocumentDash(props) {
  const noteDocs = props.props.noteDocs;
  const expenses = props.props.expenses;
  const dupChecker= props.dupChecker

  const [selectedIndex, setSelectedIndex] = useState("");
  const [activeNoteDoc, setActiveNoteDoc] = useState("");

  const handleListItemClick = (noteDoc, props, event, index) => {
    setSelectedIndex(index);
    setActiveNoteDoc(noteDoc);
  };

  console.log("ShowDocumentDash PROPS-PROPS ", props);

  const showDeletedNoteIcon = (noteDocID, noteDoc) => {
    const find = props.props.expenses.find(
      (expense) => expense.id === noteDocID
    );

    if (find === undefined) {
      return (
        <LayersClearIcon fontSize="small" />

        // <Button
        // onClick={() => props.props.removeNoteDoc({id:noteDoc.id})}
        // // onClick={()=> console.log(noteDoc.id) }

        // >
        //   remove
        // </Button>

        // <LayersClearIcon
        // fontSize="small"
        // />
      );
    }
  };


// Anzeigen Doppelter DocURLS -  N E X T Hinzufügen Button für FilterSuche 
  const showDoupleDoc = (noteDocURL) => {
    const find = props.props.noteDocs.find(
      (noteDoc) => noteDoc.docURL === noteDocURL
    );

    // ! ! ! ! ! ! !

    var uniqueValues = new Set(noteDocs.map((noteDoc) => noteDoc.docURL));

    const found = uniqueValues.has(noteDocURL);

    var counter = noteDocs.map((noteDoc) => noteDoc.docURL === noteDocURL);

    const multipleDocs = counter.filter(Boolean).length;

    if (multipleDocs != 1) {
      return <Filter2Icon />;
    }

    // console.log(multipleDocs);
  };

  return (
    <Grid container alignItems="row">
      <Grid item xs={7}>
        <Box>
          <List>
            {noteDocs
              .filter((noteDoc) =>
                props.activeCategorie.catName === "ALL"
                  ? noteDoc
                  : noteDoc.docCategorie === props.activeCategorie.catName
              )
              .map((noteDoc, index) => {
                return (
                  <Paper key={noteDoc.id} elevation={5}>
                    <Grid container direction="column">
                      <Grid>
                        <ListItem key={noteDoc.id}>
                          <ListItemButton
                            dense={true}
                            selected={selectedIndex === index}
                            onClick={(event) =>
                              handleListItemClick(noteDoc, props, event, index)
                            }
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Grid item xs={2}>
                                <Typography
                                  variant="body2"
                                  style={{
                                    color: "SlateGray",
                                  }}
                                >
                                  {noteDoc.noteID ? (
                                    showDeletedNoteIcon(noteDoc.noteID, noteDoc)
                                  ) : (
                                    <InfoIcon fontSize="small" />
                                  )}

                                  {
                                    dupChecker ?
                                    showDoupleDoc(noteDoc.docURL)
                                    : ""
                                  }
                                  


                                  {noteDoc.docAdded.substr(0, 10)}
                                </Typography>
                              </Grid>
                              <Grid item xs={9}>
                                <ListItemText
                                  id={noteDoc.id}
                                  primary={noteDoc.docTitel}
                                  secondary={noteDoc.docDescription
                                    .substr(0, 270)
                                    .replace(/<[^>]+>/g, "")}
                                />
                                <Typography
                                  sx={{
                                    maxHeight: 90,
                                  }}
                                ></Typography>
                              </Grid>

                              <Grid item xs={1}>
                                <Grid
                                  container
                                  direction="column"
                                  justifyContent="flex-end"
                                  alignItems="flex-end"
                                >
                                  <Grid item xs={1}>
                                    <Typography
                                      variant="body2"
                                      style={{
                                        color: "SlateGray",
                                      }}
                                    >
                                      {noteDoc.docCategorie.substr(0, 8)}
                                    </Typography>
                                  </Grid>

                                  <Grid item>
                                    <Button
                                      href={noteDoc.docURL}
                                      color="primary"
                                      target="_blank"
                                    >
                                      Link
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </ListItemButton>
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Paper>
                );
              })}
          </List>
        </Box>
      </Grid>

      <Grid item xs>
        <Box
          ml={2}
          sx={{
            position: "-webkit-sticky",
            position: " sticky",
            top: 300,
          }}
        >
          <DocDashDetails
            showDocuDashPROPS={props}
            activeNoteDoc={activeNoteDoc}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
