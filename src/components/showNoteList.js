import React, { useState } from "react";
import { setActiveNote } from "./NotesDashboard";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CachedIcon from "@mui/icons-material/Cached";
import { handelTakeChanges } from "./Button/AddNote";
import moment from "moment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

const SkipButton = (properties) => {
  const props = properties.props ? properties.props.props : "";

  return (
    <IconButton
      size="small"
      color="primary"
      onClick={() => handelTakeChanges(props, properties.updates)}
    >
      <CachedIcon />
    </IconButton>
  );
};

const showHintForTimedNotes = (expense, props) => {
  const days = expense.absDatesToFinish;

  const daySubStrin = parseInt(days);

  if (days > -0.4 && days < 0.6) {
    return (
      <div>
        <Typography
          mr={1}
          style={{
            color: "Green",
            backgroundColor: "PowderBlue",
          }}
        >
          Today
        </Typography>
      </div>
    );
  }
  if (days < -0.4) {
    return (
      <Grid>
        <WarningIcon color="error" />
        <Typography
          mr={1}
          style={{
            color: "DarkRed",
            backgroundColor: "PeachPuff",
          }}
        >
          {daySubStrin}D
        </Typography>
      </Grid>
    );
  } else {
    return <span></span>;
  }
};

const showDocCounter = (expense, props) => {
  const docCounter = expense.docCounter;

  if (docCounter > 0) {
    return (
      <Grid>
        <PictureAsPdfIcon />
        {/* {docCounter} */}
      </Grid>
    );
  } else {
    return <span></span>;
  }
};

export function ShowNotes(props) {
  const expenses = props.expenses;
  const noteListStatus = props.noteListStatus;

  const [selectedIndex, setSelectedIndex] = useState("");
  const [collapseCheck, setCollapseCheck] = useState("");

  const handleListItemClick = (expense, props, event, index) => {
    setSelectedIndex(index);
    setActiveNote(expense, props.props);
  };

  return (
    <List>
      {expenses
        .filter((expense) => {
          if (noteListStatus === "allOpen") {
            return (
              expense.noteStatus === "open" && expense.absDatesToFinish < "0.6"
            );
          }
          if (noteListStatus === "openTomorrow") {
            return (
              expense.absDatesToFinish < 1.4 &&
              expense.absDatesToFinish > 0.6 &&
              expense.noteStatus != "closed"
            );
          }
          if (noteListStatus === "openAfterTomorrow") {
            return (
              expense.absDatesToFinish < 2.2 &&
              expense.absDatesToFinish > 1.4 &&
              expense.noteStatus != "closed"
            );
          } else {
            return expense.noteStatus === noteListStatus;
          }
        })
        .filter((expense) =>
          props.activeCategorie.catName === "ALL"
            ? expense
            : expense.categorie === props.activeCategorie.catName
        )
        .map((expense, index) => {
          const labelId = expense.id;
          return (
            <Paper key={expense.id} elevation={6}>
              <Grid container direction="column">
                <Grid item>
                  <ListItem key={expense.id}>
                    <ListItemButton
                      dense={true}
                      selected={selectedIndex === index}
                      onClick={(event) =>
                        handleListItemClick(expense, props, event, index)
                      }
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item xs={1}>
                          {showHintForTimedNotes(expense, props)}
                          {showDocCounter(expense, props)}
                        </Grid>

                        <Grid item xs={9}>
                          <ListItemText
                            id={expense.id}
                            primary={expense.description}
                            secondary={expense.noteDecscription
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
                                {expense.categorie.substr(0, 8)}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <SkipButton
                                props={props}
                                updates={{
                                  id: expense.id,
                                  datesToFinish: moment().add(1, "days"),
                                }}
                              />
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
  );
}
