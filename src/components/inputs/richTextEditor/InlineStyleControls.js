import React from 'react';
import {StyleButton} from './StyleButton';

const INLINE_STYLES = [
  {label: 'HY', style: "HIGHLIGHTY"},
  {label: 'HG', style: "HIGHLIGHTG"},

 


];

const styleMap = {
  // CODE: {
  //   backgroundColor: '#fffe0d',
  //   fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
  //   fontSize: 36,
  //   padding: 9
  // },
  HIGHLIGHTY: {
    backgroundColor: '#fffe0d',
  },
  HIGHLIGHTG: {
    backgroundColor: "#ccff88",
 
  },

};

const InlineStyleControls = props => {
  const selection = props.editorState.getSelection();

  const currentStyle = props.editorState
  // .getCurrentContent()
  .getCurrentInlineStyle(selection.getStartKey());
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export {InlineStyleControls, styleMap};
