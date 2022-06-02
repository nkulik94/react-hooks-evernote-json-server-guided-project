import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer( { id } ) {
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

  function handleNewNote() {
    const newNote = {
      userId: id,
      title: 'Note Title',
      body: 'Note body'
    }
    const config = {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newNote)
    }
    fetch('http://localhost:3000/notes', config)
      .then(r => r.json())
      .then(note => {
        updateNoteList([...allNotes, note])
        addViewedNote(note)
        displayEdit(true)
      })
  }

  const renderedNotes = allNotes.filter(note => note.userId === id)

  const filteredNotes = renderedNotes.filter(note => note.title.toUpperCase().includes(searched.toUpperCase()))

  return (
    <>
      <Search onSearch={searchBy} value={searched} />
      <div className="container">
        <Sidebar notes={filteredNotes} onClickNote={handleViewedNote} onAddNote={handleNewNote} />
        <Content note={viewedNote} editForm={editForm} displayEdit={displayEdit} onSaveEdit={handleSaveEdit} />
      </div>
    </>
  );
}

export default NoteContainer;
