let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}


const container = document.getElementById("container");

const btnSubmit = document.getElementById("btn-submit");
const inputTitle = document.getElementById("input-title");

btnSubmit.addEventListener("click", function() {
  let myBook = new Book(inputTitle.value);
  addBookToLibrary(myBook);
  let card = document.createElement("div");
  card.className = "card";
  card.textContent = myBook.title;
  let readBtn = document.createElement("button");
  readBtn.textContent = "mark read";
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  card.id = myLibrary.length;

  deleteBtn.addEventListener("click", function() {
    let tempCard = document.getElementById(deleteBtn.parentElement.id);
    container.removeChild(tempCard);
  });
  
  card.appendChild(readBtn);
  card.appendChild(deleteBtn);
  container.appendChild(card);
});