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
  Button,
  Checkbox,
} from "@mui/material";
import { setActiveNote } from "../NotesDashboard";
import { ShowNotes } from "../showNoteList";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export function SearchForNotes(properties) {
  const props = properties.props;

  const [filteredNotes, setFilteredNotes] = useState("");
  const [noteListStatus, setnoteListStatus] = useState("open");
  const [buzwords, setBuzwords] = useState(props.buzwords);

  const [searchBuzwords, setSearchBuzwords] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState("");

  const [filteredNotesOnBuz, setFilteredNotesOnBuz] = useState(props.expenses);


  const icon = <CheckBoxOutlineBlank fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => setActiveNote(filteredNotes, props), [filteredNotes]);

  // filteredExpenses(filteredExpenses)=>{
  //   filteredExpenses.filter

  // }

  // useEffect(()=>{
  //   setFilteredExpenses(searchBuzwords.map((titel)=> console.log(titel)))
  //   , [searchBuzwords]
  // })

  function filterNotes(filterCriteria) {
    // var maptitel= filteredExpenses.map((titel)=>titel).toString()
    const result = props.expenses.filter(
      (filterNotes) =>
        filterNotes.bTitel.includes(
          // "1Buzw"
          maptitel
        )
      // ['1Buzw', '2Buzw']
    );

    console.log("Filtered Notes: ", result);
  }

  // function filterNotes(arr, query) {
  //   return arr.filter(function (el) {
  //     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  //   });
  // }

  return (
    <Box>
      <Grid container direction="row">
        <Grid item xs={9}>
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
                    .substr(17, 300)
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
        <Grid item xs>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              value={noteListStatus}
              label="Status"
              onChange={(e) => setnoteListStatus(e.target.value)}
            >
              <MenuItem value={"open"}>Open</MenuItem>
              <MenuItem value={"allOpen"}>Just Do´s</MenuItem>
              <MenuItem value={"closed"}>closed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs>
        <Autocomplete
          multiple
          onChange={(event, value) => {
            setFilteredExpenses(
              value.map(
                (titel) =>
                  //  console.log("Auto Buz Titel",titel.titel)
                  titel.titel
              )
            );

              // value.map(
              //   (titel) =>
              //     //  console.log("Auto Buz Titel",titel.titel)
              //     titel.titel
              // )

            

            setSearchBuzwords(value);
            console.log("File Change", filteredExpenses);
          }}
          id="tags-filter-Buz"
          options={buzwords}
          getOptionLabel={(option) => option.titel}
          // defaultValue={[top100Films[13]]}
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
        <Button
          onClick={() =>
          //   console.log(
          //     "filteredExpenses",
          //     filteredExpenses[filteredExpenses.length - 1]
          //   )
          console.log("Filtered Notes: ", filteredNotesOnBuz)     
          } 

        >
          Show B-Sear
        </Button>

        <Button
        onClick={()  =>{
          setFilteredNotesOnBuz(
            filteredNotesOnBuz.filter(filteredNotes => filteredNotes.bTitel.includes(filteredExpenses[filteredExpenses.length - 1]) )  
          ),
          console.log("Filtered Notes: ", filteredNotesOnBuz)     
      
      }}
        >
          Start Filter 
        </Button>
      </Grid>
      <Grid item xs>
        <ShowNotes
          props={props}
          expenses={props.expenses}
          activeCategorie={properties.activeCategorie}
          noteListStatus={noteListStatus}
        />
      </Grid>
    </Box>
  );
}
