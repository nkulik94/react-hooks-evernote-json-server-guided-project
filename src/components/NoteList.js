import React from "react";
import NoteItem from "./NoteItem";

function NoteList( { notes, onClickNote } ) {
  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map(note => <NoteItem note={note} onClickNote={onClickNote} key={note.id}/>)}
    </ul>
  );
}

export default NoteList;
