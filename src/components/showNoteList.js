import React, { useEffect, useState } from "react";
import { setActiveNote } from "./NotesDashboard";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

const showHintForTimedNotes = (expense) => {
  const days = expense.absDatesToFinish;

  const daySubStrin = parseInt(days);

  if (days > -0.4 && days < 0.6) {
    return (
      <Typography
        mr={1}
        style={{
          // color: "Green",
          // backgroundColor: "ghostWhite",
          color: "Green",
          backgroundColor: "PowderBlue",
        }}
      >
        Today
      </Typography>
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
    return <p></p>;
  }
};

export function ShowNotes(props) {
  const expenses = props.expenses;
  const noteListStatus = props.noteListStatus;

  const [selectedIndex, setSelectedIndex] = useState("");

  const handleListItemClick = (expense, props, event, index) => {
    setSelectedIndex(index);
    setActiveNote(expense, props.props);
  };

  return (
    <List>
      {expenses
        .filter((expense) =>
          noteListStatus != "allOpen"
            ? expense.noteStatus === noteListStatus
            : expense.noteStatus === "open" && expense.absDatesToFinish < "0.6"
        )
        .filter((expense) =>
          props.activeCategorie.catName === "ALL"
            ? expense
            : expense.categorie === props.activeCategorie.catName
        )
        .map((expense, index) => {
          const labelId = expense.id;
          return (
            <Paper key={expense.id} elevation={6}>
              <ListItem
                // dense="true"

                key={expense.id}
              >
                <ListItemButton
                  dense={true}
                  selected={selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(expense, props, event, index)
                  }
                >
                  {showHintForTimedNotes(expense)}

                  <ListItemText
                    id={expense.id}
                    primary={expense.description}
                    secondary={expense.noteDecscription.substr(16, 100)}
                  />
                  <Typography
                    align="right"
                    // noWrap="true"
                    variant="body2"
                    style={{
                      color: "SlateGray",
                      // backgroundColor: "WhiteSmoke",
                    }}
                  >
                    {expense.categorie.substr(0, 8)}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Paper>
          );
        })}
    </List>
  );
}
