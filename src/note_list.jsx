import "./assets/css/note_list.css";
import SubNote from "./sub_note.jsx";

function NoteList({
  noteHolder,
  setNote,
  headerTitle,
  setTitle,
  setCurrentNoteIndex,
}) {
  return (
    <>
      <div className="note-list">
        <h2 className="title-text">Notes List</h2>
        <div className="sub-notes">
          {noteHolder.map((note, index) => (
            <SubNote
              key={index}
              index={index}
              setCurrentNoteIndex={setCurrentNoteIndex}
              title={note.title}
              content={note.content}
              noteHolder={noteHolder}
              setNote={setNote}
              headerTitle={headerTitle}
              setTitle={setTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NoteList;
