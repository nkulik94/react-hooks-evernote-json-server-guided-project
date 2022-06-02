import React from "react";

function NoteItem( { note, onClickNote } ) {
  return (
    <li onClick={() => onClickNote(note)}>
      <h2>{note.title}</h2>
      <p>{note.body.substring(0, 50)}{note.body.substring(50) !== '' ? '...' : null}</p>
    </li>
  );
}

export default NoteItem;
