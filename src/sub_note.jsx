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
  const pinBtn = function () {
    noteHolder[index].pin = !noteHolder[index].pin;
    const newArr = [...noteHolder];
    newArr.sort((a, b) => {
      if (a.pin === b.pin) {
        return a.id - b.id;
      }
      return b.pin - a.pin;
    });
    setNote(newArr);
  };
  return (
    <>
      <div className="sub-note">
        <div className="top">
          <h4 className="sub-note-title">{title}</h4>
          <p onClick={pinBtn}>pin</p>
        </div>
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
