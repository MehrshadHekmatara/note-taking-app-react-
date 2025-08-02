import "./assets/css/add_edit_btn.css";
import { addNoteBehavior } from "./add_note_btn_behavior.js";
import { cancelEdit } from "./cancel_edit.js";
import { saveChanges } from "./save_changes.js";

function AddEditBtn({
  setNote,
  noteHolder,
  headerTitle,
  setTitle,
  currentNoteIndex,
}) {
  let contentInput = document.querySelector(".content-input");
  let titleInput = document.querySelector(".title-input");
  return (
    <>
      {headerTitle === "New" ? (
        <button
          className="add-note-btn"
          onClick={() => addNoteBehavior(setNote, noteHolder)}
        >
          Add Note
        </button>
      ) : (
        <div className="edit-btns-parent">
          <button
            onClick={() =>
              saveChanges(
                contentInput,
                titleInput,
                setNote,
                noteHolder,
                setTitle,
                currentNoteIndex
              )
            }
            className="save-btn"
          >
            Save
          </button>
          <button
            onClick={() => cancelEdit(setTitle, contentInput, titleInput)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

export default AddEditBtn;
