// src/components/CustomEditor.js
import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const CustomEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const handleSave = () => {
    console.log('Save');
  };

  const handleVariables = () => {
    console.log('Variables');
  };

  return (
    <div>
      <button onClick={handleSave}>SAVE</button>
      <button onClick={handleVariables}>Variables</button>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default CustomEditor;
