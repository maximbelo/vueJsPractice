// Variables
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

buttonEl.addEventListener("click", () => {
  const enteredVal = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredVal;

  listEl.append(listItemEl);
  inputEl.value = "";
});
