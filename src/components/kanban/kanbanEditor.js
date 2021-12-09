import {
  TextField,
  Grid,
  Box,
  Button,
  Paper,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";


export function KanbanButton(props) {


  return (
    <Grid>
      <ButtonGroup>
        <Button
          label=""
          variant="filled"
          onClick={() => props.props.addStory(props.editorUpdates)}
        >
          Add
        </Button>

        <Button
          label=""
          variant="filled"
          onClick={() => props.props.editUserStorie(props.props.activeUserStorie[0].storieID, props.editorUpdates)}
        >
          Edit
        </Button>

        <Button
          label=""
          variant="filled"
          onClick={() => props.props.removeStory( props.props.activeUserStorie[0].storieID)}
        >
          Remove
        </Button>
      </ButtonGroup>
    </Grid>
  );
}

export default function KanbanEditor(properties) {
  const [titel, setTitel] = useState("")
  const [description, setDescription] = useState("")

  const [dastesToFinish, setDastesToFinish] = useState("")
  const [activeUserStorieID, setActiveUserStorieID] = useState("");
  
  const props = properties.props;


  if (
    props.activeUserStorie != "" &&
    props.activeUserStorie[0].storieID != activeUserStorieID
  ) {
    setTitel(props.activeUserStorie[0].titel);
    setDescription(props.activeUserStorie[0].description);
    setActiveUserStorieID(props.activeUserStorie[0].storieID);
    setDastesToFinish(props.activeUserStorie[0].dastesToFinish)
  }

  const updates = {
    aNoteId: props.activeNote[0].id,
    storieID: uuidv4(),
    column: "column-2",

    titel: titel,
    description: description,
    dastesToFinish: dastesToFinish,
  };

  var modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      // [{ 'header': [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: "red" }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  var formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      //   columns={12}
    >

        <Button 
        onClick={()=>console.log("PROPS :", props) }
        >
            Show PROPS
        </Button>
      <Grid item xs={2}>
        <Grid
          container
          direction="column"
          // justifyContent="center"
          // alignItems="center"
          spacing={2}
        >
          <KanbanButton props={props} editorUpdates={updates} />
          <Grid item xs>
            <TextField
              label="Story Titel"
              variant="filled"
              value={titel}
              onChange={(e) => setTitel(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Finish Till"
              variant="filled"
              value={dastesToFinish}
              onChange={(e) => setDastesToFinish(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          formats={formats}
        />
      </Grid>
    </Grid>
  );
}
