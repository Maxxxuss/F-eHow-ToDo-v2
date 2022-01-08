import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function BuzwordTags(props) {
  const tNdsProps = props.titelNdsProps.NotesDashboradProps;
  const [selectedOptions, setSelectedOptions] = useState("");

  const [top100Films , setTopFilms] = useState(tNdsProps.buzwords)

  const [indexOptions, setIndexOptions] = useState("");
  const [defaultOptions, setDefaultOptions] = useState(
    // [top100Films[1]],
    tNdsProps.activeNote.buzwords
      ? tNdsProps.activeNote.buzwords
      : top100Films[0]
    // tNdsProps.activeNote.buzwords
  );

  const [addEditBuzword, setAddEditBuzword] = useState("");

  //   function indMap(value) {
  //     top100Films.map((value, index) => {
  //       console.log("VAlue are: ", value, "index is: ", index);
  //     });
  //   }

  // useEffect(()=>{
  //   setTopFilms
  //   ,[tNdsProps.buzwords]
  // })



  function indMao(value) {
    selectedOptions.map((value) => {
      console.log("VAlue are: ", value.indexId);
      setIndexOptions([...indexOptions, value.indexId]);
    });
  }

  // useEffect(()=>{
  //   tNdsProps.activeNote.buzwords.map((indexId) => {
  //     setDefaultOptions([top100Films[indexId.indexId]]);

  // }, [tNdsProps.activeNote])})

  // const defaultOptions = [top100Films[1], top100Films[2]];

  const updates = {
    buzwords: indexOptions,
  };

  //   React.useEffect(
  //     () => (
  //       setSelectedOptions(tNdsProps.expenses[0].buzwords),
  //       console.log("Selectet options changed", selectedOptions)
  //     ),
  //     [tNdsProps.activeNote]
  //   );

  return (
    <Grid>
      <Autocomplete
        multiple
        // onChange={(event, value)  =>    value.map((value) => {
        //     console.log("VAlue are: ", value);
        //     setIndexOptions(value)
        //   }) }
        onChange={(event, value) => setIndexOptions(value)}
        // }}
        // onChange={(event, value, reason) => console.log("Autocomplete ", value)}
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
              //   onChange={(event, value) => console.log("CheckBock ", value)}
            />
            {option.titel}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Checkboxes"
            placeholder="Favorites"
            // onClick={(event, value) => console.log("Textfield  ", value, event, params)}
          />
        )}
      />
      <Button
        onClick={() =>
          console.log("Buzword Props ", tNdsProps, "checkd ", selectedOptions)
        }
      >
        Show B-Props
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          tNdsProps.editExpense(tNdsProps.activeNote.id, updates),
            tNdsProps.editActiveNote(updates);
        }}
      >
        Add NotBuz
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          console.log("defaultOptions", defaultOptions),
            tNdsProps.activeNote.buzwords.map((indexId) => {
              console.log("index Id: ", [top100Films[indexId.indexId]]);

              // setDefaultOptions([top100Films[indexId.indexId]]);
              // setDefaultOptions([top100Films[1]])
            });
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
      onClick={()=>{
        tNdsProps.addBuzword({titel: addEditBuzword}), 
        console.log("NDS Props - BNuzword: ", tNdsProps.buzwords);
      }}
      >
        Add new Buz
      </Button>
    </Grid>
  );
}

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   // { indexId: "1", titel: "The Shawshank Redemption", year: 1994 },
//   // { indexId: "2", titel: "The Godfather", year: 1972 },
//   // { indexId: "3", titel: "The Godfather: Part II", year: 1974 },
//   // { indexId: "4", titel: "The Dark Knight", year: 2008 },
//   // { indexId: "5", titel: "12 Angry Men", year: 1957 },
//   // { indexId: "6", titel: "Schindler's List", year: 1993 },
//   // { indexId: "7", titel: "Pulp Fiction", year: 1994 },
// ];
