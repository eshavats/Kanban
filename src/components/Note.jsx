import React from "react";

function Note(props) {
  
  function handleClick()
  {
    props.onDelete(props.id,props.status);
  }

  function handleUpgrade()
  {
    props.onUpgrade(props.id);
  }

  function renderButton(status, button)
  {
    if(status === "done")
    {
      return <button className="mini ui red button delete-btn" onClick={handleClick}>DELETE</button>
    }
    return (
      <>
      <button className="mini ui inverted green button" onClick={handleUpgrade}>{button}</button>
      <button className="mini ui red button delete-btn" onClick={handleClick}>DELETE</button>
      </>
    );
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {renderButton(props.status, props.button)}
    </div>
  );
}

export default Note;
