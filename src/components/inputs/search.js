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
import { setActiveNote } from "../NotesDashboard";
import { ShowNotes } from "../showNoteList";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { taskCounter } from "../Counter/counter";

export function SearchForNotes(properties) {
  const { props, activeCategorie } = properties;

  const [filteredNotes, setFilteredNotes] = useState(null); // Use null for initial state
  const [noteListStatus, setNoteListStatus] = useState("open");
  const [filteredNotesOnBuz, setFilteredNotesOnBuz] = useState(props.expenses);
  const [checked, setChecked] = useState(false);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => setActiveNote(filteredNotes, props), [filteredNotes]);

  useEffect(() => {
    setFilteredNotesOnBuz(props.expenses);
  }, [props.expenses]);

  const searchBuzSetting = (value) => {
    const latestValue = value[value.length - 1];
    const newFilteredNotes = props.expenses.filter(note =>
      note.bTitel.includes(latestValue) || 
      note.description.includes(latestValue) || 
      note.noteDecscription.includes(latestValue)
    );
    setFilteredNotesOnBuz(newFilteredNotes);
  };

  const handleMultiRemoveNote = () => {
    const delNotes = props.expenses.filter(note =>
      note.absDatesToFinish < -45 && note.noteStatus === "closed"
    );

    delNotes.forEach(note => {
      props.removeExpense({ id: note.id });
    });
  };

  useEffect(() => {
    if (filteredNotesOnBuz.length === 0 && props.expenses.length > 0) {
      setFilteredNotesOnBuz(props.expenses);
    }
  }, [filteredNotesOnBuz.length, props.expenses]);

  const handleFilterChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <Box mr={2} ml={1}>
      <Grid container direction="row">
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleFilterChange} />}
          label="Filter"
        />
        <Box
          sx={{
            bgcolor: "background.paper",
            color: 'text.secondary',
            boxShadow: 1,
            p: 2,
            maxWidth: 140,
          }}
        >
          {taskCounter(props.expenses, 0.6, -100.4, "closed")}/
          {taskCounter(props.expenses, 1.4, 0.6, "closed")}/
          {taskCounter(props.expenses, 2.2, 1.4, "closed")}/
          {taskCounter(props.expenses, 3, 2, 2, "closed")}/
          {taskCounter(props.expenses, 3.8, 3, "closed")}
          ({taskCounter(props.expenses, 100, -100, "closed")})
        </Box>

        <Grid item xs={12}>
          <Collapse in={checked}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={12}>
                <Autocomplete
                  options={props.expenses}
                  value={filteredNotes}
                  onChange={(event, expense) => setFilteredNotes(expense)}
                  getOptionLabel={(note) =>
                    note.description
                      ? `${note.description} - ${note.noteDecscription.replace(/<[^>]+>/g, "")}`
                      : "No Description" // Display a default message for empty descriptions
                  }
                  style={{
                    marginBottom: "10px",
                    background: "rgba(238, 238, 238, 0.405)",
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Search Note" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="status-select-label">Filter</InputLabel>
                  <Select
                    labelId="status-select-label"
                    value={noteListStatus}
                    label="Status"
                    onChange={(e) => setNoteListStatus(e.target.value)}
                  >
                    <MenuItem value={"open"}>Open</MenuItem>
                    <MenuItem value={"allOpen"}>Just Do´s</MenuItem>
                    <MenuItem value={"openTomorrow"}>Do´s +1 Day</MenuItem>
                    <MenuItem value={"openAfterTomorrow"}>Do´s +2 Day</MenuItem>
                    <MenuItem value={"closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {noteListStatus === "closed" && (
                <Grid item>
                  <Button
                    onClick={handleMultiRemoveNote}
                    variant="contained"
                    color="error"
                  >
                    Del Closed +45 D
                  </Button>
                </Grid>
              )}
              <Grid item>
                <Autocomplete
                  multiple
                  onChange={(event, value) => {
                    searchBuzSetting(value.map(buz => buz.titel));
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
                    <TextField {...params} label="Search Buzwords" placeholder="Favorites" />
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
            activeCategorie={activeCategorie}
            noteListStatus={noteListStatus}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
