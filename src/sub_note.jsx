import "./assets/css/sub_note.css";
import Edit from "./edit.jsx";
import Delete from "./delete.jsx";

function SubNote({
  title,
  content,
  noteHolder,
  setNote,
  index,
  setTitle,
  setCurrentNoteIndex,
}) {
  return (
    <>
      <div className="sub-note">
        <h4 className="sub-note-title">{title}</h4>
        <div className="sub-note-content">
          <p className="sub-note-text">{content}</p>
          <div className="delete-edit-btn">
            <Edit
              setCurrentNoteIndex={setCurrentNoteIndex}
              index={index}
              setTitle={setTitle}
              noteHolder={noteHolder}
            />
            <Delete noteHolder={noteHolder} setNote={setNote} index={index} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubNote;
