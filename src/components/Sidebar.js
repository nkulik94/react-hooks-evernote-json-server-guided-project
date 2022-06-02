import React from "react";
import NoteList from "./NoteList";

function Sidebar( { notes, onClickNote } ) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onClickNote={onClickNote} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
