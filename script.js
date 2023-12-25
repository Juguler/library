const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
}

addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 200, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 324, false);
addBookToLibrary('1984', 'George Orwell', 328, true);

function displayBooks() {
    const libraryDiv = document.getElementById('library'); // Assuming you have a div with id 'library'
    libraryDiv.innerHTML = ''; // Clear the div
  
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-card'); // Assuming you have CSS styles for 'book-card'
  
      // Create the book details
      const title = document.createElement('h2');
      title.textContent = book.title;
      bookDiv.appendChild(title);
  
      const author = document.createElement('p');
      author.textContent = 'Author: ' + book.author;
      bookDiv.appendChild(author);
  
      const pages = document.createElement('p');
      pages.textContent = 'Pages: ' + book.pages;
      bookDiv.appendChild(pages);
  
      const read = document.createElement('p');
      read.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
      bookDiv.appendChild(read);
  
      // Add the book card to the library div
      libraryDiv.appendChild(bookDiv);
    }
}

displayBooks();