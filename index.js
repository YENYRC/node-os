const bookList = require('./bookList');
const authorUtils = require('./authorUtils');

bookList.addBook('The Great Gatsby', 'F. Scott Fitzgerald', '978-0743273565');
bookList.addBook('To Kill a Mockingbird', 'Harper Lee', '978-0446310789');
bookList.addBook('1984', 'George Orwell', '978-0451524935');
bookList.addBook('The Catcher in the Rye', 'J.D. Salinger', '978-0316769488');
bookList.addBook('Brave New World', 'Aldous Huxley', '978-0060850524');

const allBooks = bookList.getBooks();
console.log('Todos los libros:', allBooks);

const allAuthors = authorUtils.getUniqueAuthors(allBooks);
console.log('Todos los autores:', allAuthors);