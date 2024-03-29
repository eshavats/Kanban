import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event)
  {
    const {name, value} = event.target;

    setNote(() => {
      return {
        ...note,
        [name]: value
      };
    })
  }

  function submitNote(event)
  {
    props.onAdd(note);
    event.preventDefault();

    setNote({title: "", content: ""});
  }


  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" autoComplete="off" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
