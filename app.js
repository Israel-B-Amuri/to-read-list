const inputButton = document.querySelector(".input-button");
const booksList = document.querySelector("ul");
const input = document.querySelector("input");

//adventListeners to buttons
inputButton.addEventListener("click", addbook);
//checkButton.addEventListener("click", checkFunction(e));
booksList.addEventListener("click", deleteFunction);

//adding a book to the list
function addbook() {
  const userInput = input.value;
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const checkButton = document.createElement("button");
  const div = document.createElement("div");

  //adding features to the div
  div.classList.add("book-container");

  //adding features to the delete button
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";

  //adding features to the check button
  checkButton.classList.add("checkButton");
  checkButton.innerText = "Done";

  //adding the user input to the document
  li.innerHTML = userInput;
  li.classList.add("book");

  //adding the delete and check button to the document button
  div.appendChild(li);
  div.appendChild(deleteButton);
  div.appendChild(checkButton);
  //adding all the features to the ul
  booksList.append(div);
  input.value = "";
}

function deleteFunction(e) {
  const item = e.target;

  if (item.classList[0] === "delete-button") {
    const book = item.parentElement;
    book.remove();
  }

  if (item.classList[0] === "checkButton") {
    const book = item.parentElement;

    book.classList.toggle("completed");
  }
}
