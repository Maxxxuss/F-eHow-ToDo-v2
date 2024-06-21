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

const SkipButton = ({ props, updates }) => (
  <IconButton
    size="small"
    color="primary"
    onClick={() => handelTakeChanges(props, updates)}
  >
    <CachedIcon />
  </IconButton>
);

const showHintForTimedNotes = (expense) => {
  const days = expense.absDatesToFinish;
  const daySubStrin = parseInt(days);

  if (days > -0.4 && days < 0.6) {
    return (
      <Typography
        mr={1}
        style={{
          color: "green",
          backgroundColor: "powderblue",
        }}
      >
        Today
      </Typography>
    );
  }
  if (days < -0.4) {
    return (
      <Grid container alignItems="center">
        <WarningIcon color="error" />
        <Typography
          mr={1}
          style={{
            color: "darkred",
            backgroundColor: "peachpuff",
          }}
        >
          {daySubStrin}D
        </Typography>
      </Grid>
    );
  }
  return null;
};

const showDocCounter = (expense) => {
  const docCounter = expense.docCounter;

  if (docCounter > 0) {
    return (
      <Grid>
        <PictureAsPdfIcon />
      </Grid>
    );
  }
  return null;
};

export function ShowNotes({ expenses, noteListStatus, activeCategorie, props }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (expense, event, index) => {
    setSelectedIndex(index);
    setActiveNote(expense, props);
  };

  const filteredExpenses = expenses
    .filter((expense) => {
      switch (noteListStatus) {
        case "allOpen":
          return (
            expense.noteStatus === "open" &&
            expense.absDatesToFinish < 0.6
          );
        case "openTomorrow":
          return (
            expense.absDatesToFinish < 1.4 &&
            expense.absDatesToFinish > 0.6 &&
            expense.noteStatus !== "closed"
          );
        case "openAfterTomorrow":
          return (
            expense.absDatesToFinish < 2.2 &&
            expense.absDatesToFinish > 1.4 &&
            expense.noteStatus !== "closed"
          );
        default:
          return expense.noteStatus === noteListStatus;
      }
    })
    .filter((expense) =>
      activeCategorie.catName === "ALL"
        ? true
        : expense.categorie === activeCategorie.catName
    );

  return (
    <List>
      {filteredExpenses.map((expense, index) => (
        <Paper key={expense.id} elevation={6}>
          <Grid container direction="column">
            <Grid item>
              <ListItem key={expense.id}>
                <ListItemButton
                  dense
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(expense, event, index)}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={1}>
                      {showHintForTimedNotes(expense)}
                      {showDocCounter(expense)}
                    </Grid>
                    <Grid item xs={9}>
                      <ListItemText
                        id={expense.id}
                        primary={expense.description}
                        secondary={
                          expense.noteDecscription
                            ? expense.noteDecscription
                                .substr(0, 270)
                                .replace(/<[^>]+>/g, "")
                            : ""
                        }
                      />
                      <Typography sx={{ maxHeight: 90 }} />
                    </Grid>
                    <Grid item xs={1}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ color: "slategray" }}
                          >
                            {expense.categorie.substr(0, 8)}
                          </Typography>
                        </Grid>
                        <Grid item>
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
      ))}
    </List>
  );
}
