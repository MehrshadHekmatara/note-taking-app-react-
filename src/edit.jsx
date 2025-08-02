import "./assets/css/edit.css";

function Edit({ setTitle, index, setCurrentNoteIndex, noteHolder }) {
  const editClickBehavior = function () {
    setTitle("Edit");
    setCurrentNoteIndex(index);
    document.querySelector(".title-input").value = noteHolder[index]["title"];
    document.querySelector(".content-input").value =
      noteHolder[index]["content"];
  };
  return (
    <>
      <p onClick={editClickBehavior} className="edit-text">
        Edit
      </p>
    </>
  );
}

export default Edit;
