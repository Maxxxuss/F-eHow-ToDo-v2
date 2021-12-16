/* global React */
/* global ReactQuill */
import ReactQuill from "react-quill";
import React from "react";
import { TextField } from "@mui/material";

if (typeof React !== "object") {
  alert('React not found. Did you run "npm install"?');
}

if (typeof ReactQuill !== "function") {
  alert('ReactQuill not found. Did you run "make build"?');
}

var EMPTY_DELTA = { ops: [] };

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "snow",
      enabled: true,
      readOnly: false,
      value: EMPTY_DELTA,
      events: [],
    };
  }

  formatRange(range) {
    return range ? [range.index, range.index + range.length].join(",") : "none";
  }

  onEditorChange = (value, delta, source, editor) => {
    this.setState({
      value: editor.getContents(),
      events: [`[${source}] text-change`, ...this.state.events],
    });
  };

  onEditorChangeSelection = (range, source) => {
    this.setState({
      selection: range,
      events: [
        `[${source}] selection-change(${this.formatRange(
          this.state.selection
        )} -> ${this.formatRange(range)})`,
        ...this.state.events,
      ],
    });
  };

  onEditorFocus = (range, source) => {
    this.setState({
      events: [`[${source}] focus(${this.formatRange(range)})`].concat(
        this.state.events
      ),
    });
  };

  onEditorBlur = (previousRange, source) => {
    this.setState({
      events: [`[${source}] blur(${this.formatRange(previousRange)})`].concat(
        this.state.events
      ),
    });
  };

  onToggle = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  onToggleReadOnly = () => {
    this.setState({ readOnly: !this.state.readOnly });
  };

  onSetContents = () => {
    this.setState({ value: "This is some <b>fine</b> example content" });
  };

  render() {
    return (
      <div>
        <hr />
        {this.state.enabled && (
          <ReactQuill
            theme={this.state.theme}
            value={this.state.value}
            readOnly={this.state.readOnly}
            onChange={this.onEditorChange}
            onChangeSelection={this.onEditorChangeSelection}
            onFocus={this.onEditorFocus}
            onBlur={this.onEditorBlur}
          />
        )}

        <TextField
          label="Note Des"
          variant="outlined"
          value={JSON.stringify(this.state.value, null, 2)}
          margin="normal"
          color="secondary"
          minRows="6"
        />
      </div>
    );
  }
}
