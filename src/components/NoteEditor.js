import React, { useState } from "react";

function NoteEditor( { note, displayEdit, onSaveEdit } ) {
  const [editedNote, editNote] = useState(note)

  function handleChange(e) {
    editNote({...editedNote, [e.target.name]: e.target.value})
  }

  return (
    <form className="note-editor" onSubmit={e => {
        e.preventDefault()
        onSaveEdit(editedNote)
      }} >
      <input type="text" name="title" value={editedNote.title} onChange={handleChange} />
      <textarea name="body" value={editedNote.body} onChange={handleChange} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={() => displayEdit(false)}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
