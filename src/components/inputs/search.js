import React, { useEffect, useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Autocomplete,
  Grid,
  FormControl,
  InputLabel,
  Checkbox,
  Collapse,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { setActiveNote } from "../NotesDashboard";
import { ShowNotes } from "../showNoteList";
import { taskCounter } from "../Counter/counter";

export function SearchForNotes(properties) {
  const { props } = properties;

  const [filteredNote, setFilteredNote] = useState(null);
  const [filteredNotesOnBuz, setFilteredNotesOnBuz] = useState(props.expenses);
  const [noteListStatus, setNoteListStatus] = useState("open");
  const [checked, setChecked] = useState(false);

  const icon = <CheckBoxOutlineBlank fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    setActiveNote(filteredNote, props);
  }, [filteredNote, props]);

  useEffect(() => {
    setFilteredNotesOnBuz(props.expenses);
  }, [props.expenses]);

  const handleMultiRemoveNote = () => {
    const delNotes = props.expenses.filter(
      (note) =>
        note.absDatesToFinish < -45 && note.noteStatus === "closed"
    );

    console.log("delNotes +=45d are: ", delNotes.length, delNotes);

    delNotes.forEach((note) => {
      props.removeExpense({ id: note.id });
    });
  };

  return (
    <Box mr={2} ml={1}>
      <Grid container direction="row">
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Filter"
        />
        <Box
          sx={{
            bgcolor: "background.paper",
            color: "text.secondary",
            boxShadow: 1,
            p: 2,
            maxWidth: 140,
          }}
        >
          {/* Note Counter */}
          {taskCounter(props.expenses, 0.6, -100.4, "closed")}/{" "}
          {taskCounter(props.expenses, 1.4, 0.6, "closed")}/{" "}
          {taskCounter(props.expenses, 2.2, 1.4, "closed")}/{" "}
          {taskCounter(props.expenses, 3, 2.2, "closed")}/{" "}
          {taskCounter(props.expenses, 3.8, 3, "closed")}{" "}
          ({taskCounter(props.expenses, 100, -100, "closed")})
        </Box>

        <Grid item xs={12}>
          <Collapse in={checked}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Autocomplete
                  options={props.expenses}
                  onChange={(event, expense) => {
                    setFilteredNote(expense);
                  }}
                  getOptionLabel={(note) =>
                    note.description
                      ? `${note.description} - ${note.noteDescription.substr(0, 600).replace(/<[^>]+>/g, "")}`
                      : ""
                  }
                  style={{
                    marginBottom: "10px",
                    background: "rgba(238, 238, 238, 0.405)",
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search Note"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                  <Select
                    value={noteListStatus}
                    onChange={(e) => setNoteListStatus(e.target.value)}
                    label="Status"
                  >
                    <MenuItem value={"open"}>Open</MenuItem>
                    <MenuItem value={"allOpen"}>Just Do's</MenuItem>
                    <MenuItem value={"openTomorrow"}>Do's +1 Day</MenuItem>
                    <MenuItem value={"openAfterTomorrow"}>Do's +2 Days</MenuItem>
                    <MenuItem value={"closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                {noteListStatus === "closed" && (
                  <Button
                    onClick={handleMultiRemoveNote}
                    variant="contained"
                    color="error"
                    ml={2}
                    mr={3}
                  >
                    Del Closed +45 D
                  </Button>
                )}
              </Grid>

              <Grid item>
                <Autocomplete
                  multiple
                  onChange={(event, value) => {
                    searchBuzSetting(value.map((buzword) => buzword.titel));
                  }}
                  id="tags-filter-Buz"
                  options={props.buzwords}
                  getOptionLabel={(option) => option.titel}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.titel}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search Buzwords"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>

        <Grid item xs={12} mr={1}>
          <ShowNotes
            props={props}
            expenses={filteredNotesOnBuz}
            activeCategorie={properties.activeCategorie}
            noteListStatus={noteListStatus}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
