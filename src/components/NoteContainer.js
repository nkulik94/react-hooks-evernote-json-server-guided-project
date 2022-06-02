import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [allNotes, updateNoteList] = useState([])
  const [searched, searchBy] = useState('')
  const [viewedNote, addViewedNote] = useState(null)
  const [editForm, displayEdit] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then(r => r.json())
      .then(notes => updateNoteList(notes))
  }, [])

  function handleViewedNote(note) {
    addViewedNote(note)
    displayEdit(false)
  }

  function handleSaveEdit(note) {
    const config = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(note)
    }
    fetch(`http://localhost:3000/notes/${note.id}`, config)
      .then(r => r.json())
      .then(note => {
        updateNoteList(allNotes.map(n => n.id === note.id ? note : n))
        handleViewedNote(note)
      })
  }

  const filteredNotes = allNotes.filter(note => note.title.toUpperCase().includes(searched.toUpperCase()))

  return (
    <>
      <Search onSearch={searchBy} value={searched} />
      <div className="container">
        <Sidebar notes={filteredNotes} onClickNote={handleViewedNote} />
        <Content note={viewedNote} editForm={editForm} displayEdit={displayEdit} onSaveEdit={handleSaveEdit} />
      </div>
    </>
  );
}

export default NoteContainer;
