import React from "react";
import NoteList from "./NoteList";

function Sidebar( { notes, onClickNote, onAddNote } ) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onClickNote={onClickNote} />
      <button onClick={onAddNote}>New</button>
    </div>
  );
}

export default Sidebar;
