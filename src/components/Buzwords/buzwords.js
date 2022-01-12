import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Grid } from "@mui/material";
import { useState } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function BuzwordTags(props) {
  const tNdsProps = props.titelNdsProps.NotesDashboradProps;

  const buzOptions = tNdsProps.buzwords;

  const [indexOptions, setIndexOptions] = useState("");
  const defaultOptions = tNdsProps.activeNote.buzwords
    ? tNdsProps.activeNote.buzwords
    : buzOptions[0];

  const updates = {
    buzwords: indexOptions,
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs 
      mb={2}
      >
        <Autocomplete
          multiple
          onChange={(event, value) => {
            setIndexOptions(value);
          }}
          id="checkboxes-tags-demo"
          options={buzOptions}
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
      </Grid>
      <Grid item xs
      ml={2}
      >
        <Button
          variant="contained"
          onClick={() => {
            tNdsProps.editExpenseBuzword(tNdsProps.activeNote.id, updates),
              tNdsProps.editActiveNote(updates);
          }}
        >
          Add to Note
        </Button>
      </Grid>
    </Grid>
  );
}
