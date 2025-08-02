const cancelEdit = function (setTitle, contentInput, titleInput) {
  setTitle("New");
  titleInput.blur();
  contentInput.blur();
  titleInput.value = "";
  contentInput.value = "";
};

export { cancelEdit };
