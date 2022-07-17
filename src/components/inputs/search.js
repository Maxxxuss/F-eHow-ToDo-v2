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
  Accordion,
  Collapse,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { setActiveNote } from "../NotesDashboard";
import { ShowNotes } from "../showNoteList";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { taskCounter } from "../Counter/counter";

export function SearchForNotes(properties) {
  const props = properties.props != "" ? properties.props : "";

  const [filteredNotes, setFilteredNotes] = useState("");
  const [noteListStatus, setnoteListStatus] = useState("open");

  const [filteredNotesOnBuz, setFilteredNotesOnBuz] = useState(props.expenses);

  const icon = <CheckBoxOutlineBlank fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => setActiveNote(filteredNotes, props), [filteredNotes]);

  useEffect(() => setFilteredNotesOnBuz(props.expenses), [props.expenses]);

  function searchBuzSetting(value) {
    const arrIn = value[value.length - 1];

    const setter = setFilteredNotesOnBuz(
      filteredNotesOnBuz.filter((filteredNotes) =>
        filteredNotes.bTitel.includes(arrIn)
      )
    );
    return setter;
  }

  const handelMultiRemoveNote = (props) => {
    const delNotes = props.expenses.filter(
      (delNotes) =>
        delNotes.absDatesToFinish < -45 && delNotes.noteStatus === "closed"
    );

    console.log("delNotes +=45d are: ", delNotes.length, delNotes);

    var i = delNotes.length;

    do {
      i -= 1;
      props.removeExpense({ id: delNotes[i].id });
    } while (i != 0);
  };

  if (
    filteredNotesOnBuz.length === 0 &&
    props.expenses.length != 0 &&
    props.expenses.length != null
  ) {
    setFilteredNotesOnBuz(props.expenses);
  }

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
          color : 'text.secondary', 
          boxShadow: 1,
          // borderRadius: 1,
          p: 2,
          maxWidth: 100,
        }}
      >
        {taskCounter(props.expenses, 0, -100, "closed")}/{" "}
        {taskCounter(props.expenses, 1, 0, "closed")}/{" "}
        {taskCounter(props.expenses, 2, 1, "closed")}/{" "}
        {taskCounter(props.expenses, 3, 2, "closed")}/{" "}
        {taskCounter(props.expenses, 4, 3, "closed")}{" "}
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
                    setFilteredNotes(expense);
                  }}
                  getOptionLabel={(filteredNotes) =>
                    filteredNotes.description
                      ? filteredNotes.description +
                        "  -  " +
                        filteredNotes.noteDecscription
                          .substr(0, 600)
                          .replace(/<[^>]+>/g, "")
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
                      onChange={filteredNotes.description}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                  <Select
                    value={noteListStatus}
                    label="Status"
                    onChange={(e) => setnoteListStatus(e.target.value)}
                  >
                    <MenuItem value={"open"}>Open</MenuItem>
                    <MenuItem value={"allOpen"}>Just Do´s</MenuItem>
                    <MenuItem value={"openTomorrow"}>Do´s +1 Day</MenuItem>
                    <MenuItem value={"openAfterTomorrow"}>Do´s +2 Day</MenuItem>

                    <MenuItem value={"closed"}>closed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                {noteListStatus === "closed" ? (
                  <Button
                    onClick={() => handelMultiRemoveNote(props)}
                    variant="contained"
                    color="error"
                    ml={2}
                    mr={3}
                  >
                    {" "}
                    Del Closed +45 D
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item>
                <Autocomplete
                  multiple
                  onChange={(event, value) => {
                    searchBuzSetting(value.map((titel) => titel.titel));
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
