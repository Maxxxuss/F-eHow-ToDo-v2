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

export function ShowDocumentDash(props) {
  const noteDocs = props.props.noteDocs;

  const [selectedIndex, setSelectedIndex] = useState("");
  const [activeNoteDoc, setActiveNoteDoc] = useState("");
  //   const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });

  const handleListItemClick = (noteDoc, props, event, index) => {
    setSelectedIndex(index);
    setActiveNoteDoc(noteDoc);
  };

  console.log("ShowDocumentDash PROPS-PROPS ", props);

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
                  <Paper key={noteDoc.id} elevation={6}>
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
                              <Grid item xs={1}>
                                <Typography
                                  variant="body2"
                                  style={{
                                    color: "SlateGray",
                                  }}
                                >
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
        <Box ml={2}>
          <DocDashDetails
            showDocuDashPROPS={props}
            activeNoteDoc={activeNoteDoc}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
