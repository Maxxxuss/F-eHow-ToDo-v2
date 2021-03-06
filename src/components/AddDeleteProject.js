import React from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";

export default function AddDeleteProject(props) {
  const [open, setOpen] = React.useState(false);
  const [categorieName, setCategorieName] = React.useState("");
  const [categorieID, setCategorieID] = React.useState("");

  const handelCategorieChange = (event) => {
    setCategorieName(event.target.value);
  };

  const handelIDChange = (event) => {
    setCategorieID(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCategorie = () => {
    props.setCategorie({
      catName: categorieName,
      catID: categorieID,
      sorting:
        1 +
        Math.max.apply(
          Math,
          props.categories.map((categorie) => categorie.sorting)
        ),
    }),
      handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        color="primary"
        startIcon={<AddCircleOutlineIcon fontSize="large" />}
      >
        Add Project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Start New Project</DialogTitle>
        <DialogContent>
          <form>
            <FormControl>
              <InputLabel htmlFor="demo-dialog-native"></InputLabel>

              <TextField
                onChange={handelIDChange}
                label="Project ID"
              ></TextField>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="demo-dialog-native"></InputLabel>

              <TextField
                onChange={handelCategorieChange}
                label="Project TItle"
              ></TextField>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={addCategorie} color="primary" variant="contained">
            Add Project
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
