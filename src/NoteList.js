import React from 'react';
import Note from './Note';

const NoteList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} updateNote={updateNote} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
