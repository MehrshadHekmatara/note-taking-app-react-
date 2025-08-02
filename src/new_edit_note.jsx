import "./assets/css/new_edit_note.css";
import AddEditBtn from "./add_edit_btn.jsx";
import { addNoteBehavior } from "./add_note_btn_behavior.js";

function NewEditNote({
  noteHolder,
  setNote,
  headerTitle,
  setTitle,
  currentNoteIndex,
  setCurrentNoteIndex,
}) {
  const pressEnterBehaviour = function (e) {
    if (e.key === "Enter") {
      if (e.shiftKey) return;
      else {
        e.preventDefault();
        addNoteBehavior(setNote, noteHolder, headerTitle);
      }
    }
  };

  const maxCharsPerLine = 30;

  const handleChange = (e) => {
    const value = e.target.value;
    const lines = value.split("\n");

    const adjustedLines = lines.map((line) => {
      if (line.length > maxCharsPerLine) {
        const chunks = line.match(new RegExp(`.{1,${maxCharsPerLine}}`, "g"));
        return chunks.join("\n");
      }
      return line;
    });

    document.querySelector(".content-input").value = adjustedLines.join("\n");
  };

  return (
    <>
      <div className="new-edit-note-parent">
        <h2 className="title-text">{headerTitle} Note</h2>
        <div className="new-edit-title">
          <h3>Title:</h3>
          <input
            type="text"
            name="title"
            className="title-input"
            onKeyDown={pressEnterBehaviour}
          />
        </div>
        <div className="new-edit-content">
          <h3>Content:</h3>
          <textarea
            type="text"
            name="content"
            className="content-input"
            onKeyDown={pressEnterBehaviour}
            onChange={handleChange}
          />
        </div>
        <AddEditBtn
          noteHolder={noteHolder}
          setNote={setNote}
          headerTitle={headerTitle}
          setTitle={setTitle}
          currentNoteIndex={currentNoteIndex}
          setCurrentNoteIndex={setCurrentNoteIndex}
        />
      </div>
    </>
  );
}

export default NewEditNote;
