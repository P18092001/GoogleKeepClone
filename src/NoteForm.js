import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() !== "" || content.trim() !== "") {
      const newNote = {
        id: uuidv4(),
        title,
        content,
      };
      onAddNote(newNote);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddNote}>
        Add Note
      </Button>
    </div>
  );
};

export default NoteForm;
