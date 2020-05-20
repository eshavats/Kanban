import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);
  const [doingNotes, setDoing] = useState([]);
  const [doneNotes, setDone] = useState([]);

  function addNote(note)
  {
    setNotes(() => {
      return [...notes, note];
    })  
  }

  function deleteNote(id, status)
  {
    switch(status)
    {
      case "todo":
        setNotes(() => {
          return notes.filter((noteItem, index) => {
            return index !== id;
          });
        }); 
        break;

      case "doing":
        setDoing(() => {
          return doingNotes.filter((noteItem, index) => {
            return index !== id;
          });
        }); 
        break;

      case "done":
        setDone(() => {
          return doneNotes.filter((noteItem, index) => {
            return index !== id;
          });
        }); 
        break;
      
    }
    
   
  }

  function upgradeTodo(id)
  {
    const note = notes.filter((noteItem, index) => {
      return index === id;
    });

    console.log(note)

    setDoing(() => {
      return [...doingNotes, ...note];
    });  

    setNotes(() => {
      return notes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function upgradeDoing(id)
  {
    const note = doingNotes.filter((noteItem, index) => {
      return index == id;
    });

    setDone(() => {
      return [...doneNotes, ...note];
    });  

    setDoing(() => {
      return doingNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function upgradeDone(id)
  {
    setDone(() => {
      return doneNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      <div class="row">
      <div class="column" style={{backgroundColor: "#aaa"}}>
        <h2>ToDo</h2>
        <p>Start doing your tasks...</p>

        {notes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          status="todo"
          button="DOING"
          onDelete={deleteNote}
          onUpgrade={upgradeTodo}
        />
      })}


      </div>
      <div class="column" style={{backgroundColor: "#bbb"}}>
        <h2>Doing</h2>
        <p>Complete tasks...</p>

        {doingNotes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          status="doing"
          button="DONE"
          onDelete={deleteNote}
          onUpgrade={upgradeDoing}
        />
      })}


      </div>
      <div class="column" style={{backgroundColor: "#ccc"}}>
        <h2>Done</h2>
        <p>Kudos!</p>

        {doneNotes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          status="done"
          onDelete={deleteNote}
          onUpgrade={upgradeDone}
        />
      })}


      </div>
    </div>

      
      <Footer />
    </div>
  );
}

export default App;
