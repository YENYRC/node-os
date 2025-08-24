function getUniqueAuthors(books) {
    const authorsSet = new Set(books.map(book => book.author));
    return Array.from(authorsSet);
  }
  
  module.exports = {
    getUniqueAuthors
  };