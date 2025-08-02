import "./assets/css/delete.css";

function Delete({ noteHolder, setNote, index }) {
  const deleteClickBehavior = function () {
    let newHolderArr = noteHolder.filter((note, ind) => ind !== index);
    setNote(newHolderArr);
  };
  return (
    <>
      <p className="delete-text" onClick={deleteClickBehavior}>
        Delete
      </p>
    </>
  );
}

export default Delete;
