import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

import { Button } from "@mui/material";

export function QEditor(props) {
  var EMPTY_DELTA = { ops: [] };

  const [theme, setTheme] = useState("snow");
  const [valueQuill, setValueQuill] = useState(EMPTY_DELTA);
  const [events, setEvents] = useState("");

  const formatRange = (range) => {
    return range ? [range.index, range.index + range.length].join(",") : "none";
  };

  const handelOnChange = (valueQuill, delta, source, editor) => {
    setValueQuill(editor.getContents());
    console.log("Wuill Edi", editor.getContents(), valueQuill);
  };

  return (
    <div>
      <ReactQuill
        theme={theme}
        valueQuill={valueQuill}
        onChange={(valueQuill, delta, source, editor) =>
          handelOnChange(valueQuill, delta, source, editor)
        }
      />

      <Button
        onChange={() => {
          setValueQuill(
            Quill.editor.setContents([
              { insert: "Hello " },
              { insert: "World!", attributes: { bold: true } },
              { insert: "\n" },
            ])
          );
        }}
      >
        Clear
      </Button>
    </div>
  );
}
