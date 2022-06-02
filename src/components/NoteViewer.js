import React from "react";

function NoteViewer( { note, displayEdit } ) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={() => displayEdit(true)} >Edit</button>
    </>
  );
}

export default NoteViewer;
