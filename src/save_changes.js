import { cancelEdit } from "./cancel_edit.js";

const saveChanges = function (
  contentInput,
  titleInput,
  setNote,
  noteHolder,
  setTitle,
  currentNoteIndex
) {
  let titleValue = titleInput.value;
  let contentValue = contentInput.value;
  if (titleValue) noteHolder[currentNoteIndex]["title"] = titleValue;
  if (contentValue) noteHolder[currentNoteIndex]["content"] = contentValue;

  setNote(noteHolder);
  cancelEdit(setTitle, contentInput, titleInput);
};

export { saveChanges };
