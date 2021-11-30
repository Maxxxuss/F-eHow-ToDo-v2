import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

import {

  Button,

} from "@mui/material";


export function QEditor (props) {
  
  
  var EMPTY_DELTA = {ops: []};


    const [theme, setTheme] = useState("snow")
    const [valueQuill, setValueQuill] = useState(EMPTY_DELTA)
    const [events, setEvents] = useState("")

    // useEffect(()=>console.log("Button Fired", valueQuill),[valueQuill])


    const formatRange =(range)=> {
        return range
          ? [range.index, range.index + range.length].join(',')
          : 'none';
      }
    
    //   const onEditorChange = (valueQuill, delta, source, editor) => {
    //     this.setState({
    //       valueQuill: editor.getContents(),
    //       events: [`[${source}] text-change`, ...this.state.events],
    //     });
    //   }
    
    //   const onEditorChangeSelection = (range, source) => {
    //     this.setState({
    //       selection: range,
    //       events: [
    //         `[${source}] selection-change(${formatRange(this.state.selection)} -> ${formatRange(range)})`,
    //         ...this.state.events,
    //       ]
    //     });
    //   }
    
    //   const onEditorFocus = (range, source) => {
    //     this.setState({
    //       events: [
    //         `[${source}] focus(${formatRange(range)})`
    //       ].concat(this.state.events)
    //     });
    //   }
    
    //   const onEditorBlur = (previousRange, source) => {
    //     this.setState({
    //       events: [
    //         `[${source}] blur(${formatRange(previousRange)})`
    //       ].concat(this.state.events)
    //     });
    //   }
    
    //  const  onToggle = () => {
    //     this.setState({ enabled: !this.state.enabled });
    //   }
    
    //   const onToggleReadOnly = () => {
    //     this.setState({ readOnly: !this.state.readOnly });
    //   }
    
    //   const onSetContents = () => {
    //     this.setState({ valueQuill: 'This is some <b>fine</b> example content' });
    //   }
      const handelOnChange =(valueQuill, delta, source, editor )=>{
        setValueQuill(editor.getContents())
        console.log("Wuill Edi", editor.getContents(), valueQuill);
        // console.log("Source,", events);
        // setEvents([`[${source}] text-change`, ...setEvents(events)])

      }

      return(
          <div>
         <ReactQuill
          theme={theme}
          valueQuill={valueQuill}
          // readOnly={this.state.readOnly}
          onChange= {(valueQuill, delta, source, editor)=>handelOnChange(valueQuill, delta, source, editor)}
          // onChangeSelection={this.onEditorChangeSelection}
          // onFocus={this.onEditorFocus}
          // onBlur={this.onEditorBlur}
        />
{/* 
        <TextField
             label="Note Des"
             variant="outlined"
               valueQuill={JSON.stringify(valueQuill)}
               // onChange={(e) => setnoteDecscription(e.target.valueQuill)}
               margin="normal"
               color="secondary"
               minRows="6"
        /> */}

        <Button
        onChange={()=>{setValueQuill(
        Quill.editor.setContents([
            { insert: 'Hello ' },
            { insert: 'World!', attributes: { bold: true } },
            { insert: '\n' }
          ]))}}
        >
          Clear
        </Button>


          </div>
       )
      

    
}