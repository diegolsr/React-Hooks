import React, { useState } from "react";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const setTitleValue = e => {
    setTitle(e.target.value);
  };

  const setBodyValue = e => {
    setBody(e.target.value);
  };

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const deleteNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Note App</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>
            <div>
              {" "}
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </div>

            <button onClick={() => deleteNote(note.title)}>X</button>
          </h3>
        </div>
      ))}

      <p>Add a note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={setTitleValue} />
        <br />
        <br />
        <textarea rows={10} cols={18} value={body} onChange={setBodyValue} />
        <br />
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default Note;
