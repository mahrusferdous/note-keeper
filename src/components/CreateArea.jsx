import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [state, setState] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function changeState() {
    setState((prevValue) => {
      return !prevValue;
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          type={state ? "text" : "hidden"}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick={changeState}
          value={note.content}
          placeholder="Take a note..."
          rows={state ? "3" : "1"}
        />
        <Zoom in={state}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
