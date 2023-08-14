import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    if (storedNotes.length > 0) {
      setNotes(storedNotes);
    }
  }, []);
   // Run once on component mount

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, [notes]);





  const addNote = () => {
    console.log('Adding new note...');
    if (title !== '' || content !== '') {
      const newNote = { id: Date.now(), title, content };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
      console.log('New note added:', newNote);
    }
  };
  
  // ...
  
  useEffect(() => {
    console.log('Saving data to local storage...');
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log('Data saved to local storage:', notes);
  }, [notes]);
  
  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? { ...updatedNote } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <div className="input-container">
        <h2>Google Keep Clone</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
