import { Button, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { editGlobalVariables } from "../actions/globalVariables";
import { getGlobalVariables } from "../selectors/autoSave";
import { locCache, setLocalStorageState } from "../store/configureStore";
import { AutoSave } from "./inputs/autoSave";

export function ImpExpData(props) {
  const expLocalStorage = (filename, text = locCache()) => {
    var blob = new Blob([text], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    this.props.editGlobalVariables({ autoSave: 0 });
  };

  const impLocStora = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setLocalStorageState(JSON.stringify(JSON.parse(reader.result)));
    };

    reader.readAsText(file);
    window.location.reload();
  };

  return (
    <div>
      <Grid
        container
        spacing={10}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <AutoSave props={props} />
        </Grid>

        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            className="expButton"
            onClick={() => expLocalStorage()}
          >
            Export Local Data
          </Button>
        </Grid>

        <Grid item>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => impLocStora(e)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    globalVariables: getGlobalVariables(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImpExpData);
