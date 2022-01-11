import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import titel from "../inputs/titel";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function BuzwordTags(props) {
  const tNdsProps = props.titelNdsProps.NotesDashboradProps;

  const [top100Films, setTopFilms] = useState(tNdsProps.buzwords);

  const [indexOptions, setIndexOptions] = useState("");
  const [defaultOptions, setDefaultOptions] = useState(
    tNdsProps.activeNote.buzwords
      ? tNdsProps.activeNote.buzwords
      : top100Films[0]
  );

  const [addEditBuzword, setAddEditBuzword] = useState("");

  const [upJustTitel, setUpJustTitel] = useState("");

  function titelMap(value) {
    indexOptions.map((value) => {
      setUpJustTitel(value.titel);
    });
  }

  const updates = {
    buzwords: indexOptions,
  };

  return (
    <Grid>
      <Autocomplete
        multiple
        onChange={(event, value) => {
          setIndexOptions(value);
        }}
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option.titel}
        defaultValue={defaultOptions}
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
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
      <Button onClick={() => console.log("upJustTitel ", upJustTitel)}>
        Show B-Props
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          tNdsProps.editExpenseBuzword(tNdsProps.activeNote.id, updates),
            tNdsProps.editActiveNote(updates);
        }}
      >
        Add NotBuz
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          console.log("defaultOptions", defaultOptions), titelMap();
        }}
      >
        Show 0.expense
      </Button>

      <TextField
        label="Add New Buz"
        variant="filled"
        value={addEditBuzword}
        onChange={(e) => setAddEditBuzword(e.target.value)}
        color="secondary"
      ></TextField>

      <Button
        variant="outlined"
        color="warning"
        onClick={() => {
          tNdsProps.addBuzword({ titel: addEditBuzword }),
            console.log("NDS Props - BNuzword: ", tNdsProps.buzwords);
        }}
      >
        Add new Buz
      </Button>
    </Grid>
  );
}
