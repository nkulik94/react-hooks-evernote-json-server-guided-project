import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [allNotes, updateNoteList] = useState([])
  const [viewedNote, addViewedNote] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then(r => r.json())
      .then(notes => updateNoteList(notes))
  }, [])
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={allNotes} onClickNote={addViewedNote} />
        <Content note={viewedNote} />
      </div>
    </>
  );
}

export default NoteContainer;
