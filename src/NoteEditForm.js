import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const NoteEditForm = ({ note, onUpdateNote, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdateNote = () => {
    if (title.trim() !== "" || content.trim() !== "") {
      onUpdateNote({
        ...note,
        title,
        content,
      });
    }
  };

  return (
    <div>
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
      <Button variant="contained" color="primary" onClick={handleUpdateNote}>
        Update
      </Button>
      <Button variant="contained" color="default" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default NoteEditForm;
