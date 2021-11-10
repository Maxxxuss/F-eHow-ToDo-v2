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
  IconButton,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CachedIcon from "@mui/icons-material/Cached";
import { handelTakeChanges } from "./Button/AddNote";
import moment from "moment";

const SkipButton = (properties) => {
  const props = properties.props ? properties.props.props : ""

  console.log("Skip Button Props: ", properties);

  // const activeNote = props != "" & props.activeNote!= undefined ? props.activeNote[0].id :""


  return (
    <IconButton
      size="small"
      onClick={() => handelTakeChanges(props, properties.updates)}
    >
      <CachedIcon />
    </IconButton>
  );
};

const showHintForTimedNotes = (expense, props) => {
  console.log("HOT FOR TIME NOTES: ", props);
  const days = expense.absDatesToFinish;

  const daySubStrin = parseInt(days);


  // const SkipButton = () => {
  //   return (
  //     <IconButton
  //       size="small"
  //       onClick={() => handelTakeChanges(props.props, updates)}
  //     >
  //       <CachedIcon />
  //     </IconButton>
  //   );
  // };

  if (days > -0.4 && days < 0.6) {
    return (
      <div>
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
        {/* <SkipButton /> */}
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
          {/* {daySubStrin}D */}
        </Typography>
        {/* <SkipButton /> */}
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
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={1}>
                      {showHintForTimedNotes(expense, props)}
                    </Grid>
                    <Grid item xs={9}>
                      <ListItemText
                        id={expense.id}
                        primary={expense.description}
                        secondary={expense.noteDecscription.substr(16, 100)}
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                      >
                        <Grid item xs={1}>
                          <Typography
                            // align="right"
                            // noWrap="true"
                            variant="body2"
                            style={{
                              color: "SlateGray",
                              // backgroundColor: "WhiteSmoke",
                            }}
                          >
                            {expense.categorie.substr(0, 8)}
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <SkipButton 
                          props ={props}
                          updates = {{ id: expense.id, 
                            datesToFinish: moment().add(1, "days"),}}
                          />
                        </Grid>
                        </Grid>

                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            </Paper>
          );
        })}
    </List>
  );
}
