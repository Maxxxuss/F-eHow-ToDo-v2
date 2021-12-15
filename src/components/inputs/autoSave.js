import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { locCache } from "../../store/configureStore";

export function autoSaveFunc(props) {
  const text = locCache();
  const autoSave = props.globalVariables.autoSave;
  const onOffSwitch = props.globalVariables.onOffSwitch;

  if (onOffSwitch === true) {
    if (autoSave === 10) {
      var blob = new Blob([text], { type: "text/plain" });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "eHowAutoSave";
      a.click();

      props.editGlobalVariables({ autoSave: 0 });
    } else {
      props.editGlobalVariables({ autoSave: autoSave + 1 });
    }
  }
}

export function AutoSave(properties) {
  const props = properties.props;
  const onOffSwitch = props.globalVariables.onOffSwitch;
  const autoSave = props.globalVariables.autoSave;

  const autoSaveSwitch = () => {
    const onOffSwitch = props.globalVariables.onOffSwitch;

    if (onOffSwitch != true) {
      props.editGlobalVariables({ onOffSwitch: true });
    } else {
      props.editGlobalVariables({ onOffSwitch: false });
    }
  };

  const autoSaveLabel = () => {
    const onOffSwitch = props.globalVariables.onOffSwitch;
    const autoSave = 11 - props.globalVariables.autoSave;

    if (onOffSwitch != true) {
      return "Auto Save OFF";
    } else {
      return "Auto Save in " + autoSave + " Actions";
    }
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.globalVariables.onOffSwitch != false ? false : true}
          onChange={() => autoSaveSwitch()}
          color="error"
        />
      }
      label={autoSaveLabel()}
    />
  );
}
