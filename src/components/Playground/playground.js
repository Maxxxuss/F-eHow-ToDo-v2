import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
// import '../inputs/quillEditor/quill.snow.css';

export function MyQuillEditor() {
  const [value, setValue] = useState('');

  useEffect(()=>{console.log("value", value), [value]})

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}