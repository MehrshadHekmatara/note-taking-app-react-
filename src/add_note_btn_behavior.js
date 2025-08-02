const addNoteBehavior = function (setNote, noteHolder, headerTitle) {
  if (headerTitle === "Edit") return;
  let titleInput = document.querySelector(".title-input");
  let titleValue = titleInput.value;
  let contentInput = document.querySelector(".content-input");
  let contentValue = contentInput.value;

  if (!titleValue || !contentValue) {
    alert("Please fill in the Title and Content fields");
    return;
  }

  setNote([...noteHolder, { title: titleValue, content: contentValue }]);
  titleInput.value = "";
  titleInput.blur();
  contentInput.value = "";
  contentInput.blur();
};

export { addNoteBehavior };
