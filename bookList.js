const books = [];

function addBook(title, author, isbn) {
  const book = { title, author, isbn };
  books.push(book);
  return book;
}

function getBooks() {
  return books;
}

module.exports = {
  addBook,
  getBooks
};