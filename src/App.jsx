import "./assets/css/App.css";
import Title from "./title.jsx";
import NewEditNote from "./new_edit_note.jsx";
import NoteList from "./note_list.jsx";
import { useState } from "react";
import LayoutAnimation from "./animation.jsx";

function App() {
  let [noteHolder, setNote] = useState([]);
  let [headerTitle, setTitle] = useState("New");
  let [currentNoteIndex, setCurrentNoteIndex] = useState("");

  return (
    <>
      <div className="App-parent">
        <LayoutAnimation />
        <Title />
        <NewEditNote
          noteHolder={noteHolder}
          setNote={setNote}
          headerTitle={headerTitle}
          setTitle={setTitle}
          currentNoteIndex={currentNoteIndex}
          setCurrentNoteIndex={setCurrentNoteIndex}
        />
        <NoteList
          noteHolder={noteHolder}
          setNote={setNote}
          title={headerTitle}
          setTitle={setTitle}
          setCurrentNoteIndex={setCurrentNoteIndex}
        />
      </div>
    </>
  );
}

export default App;
