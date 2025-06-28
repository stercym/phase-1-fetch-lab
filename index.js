document.addEventListener("DOMContentLoaded", fetchBooks);
// fetch all books from the URL
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(books => {
      renderBooks(books); 
    });
}

// Declare the call back function renderBooks that is called inside the last .then
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


