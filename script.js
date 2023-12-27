const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    newBook.classList.add('book-card')
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
}

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('modalActive').style.display = 'none';
});

function displayBooks() {
    const libraryDiv = document.getElementById('content');
    libraryDiv.innerHTML = '';
  
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-card');
    
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

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
            const toggleReadBtn = document.createElement('button');
            toggleReadBtn.textContent = 'Toggle Read';
            toggleReadBtn.addEventListener('click', () => {
                book.read = !book.read;
                displayBooks();
        });
        bookDiv.appendChild(toggleReadBtn);
        libraryDiv.appendChild(bookDiv);
    }
}
addBookToLibrary('1984', 'George Orwell', 328, true);
displayBooks();

document.getElementById('add-btn').addEventListener('click', function () {
    document.getElementById('modalActive').style.display = 'block';
});

/*document.getElementById('add-btn').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#modal_edit h3').innerText = 'Add New Book';
    document.querySelector('#new_book button').innerText = 'Add Book';
    document.getElementById('new_title').value = '';
    document.getElementById('new_author').value = '';
    document.getElementById('new_pages').value = '';
    document.getElementById('new_published').value = '';
    document.getElementById('new_acquired').valueAsDate = new Date();
    document.getElementById('new_status').value = '0';
    document.getElementById('new_id').value = '';

    this.modal.open('modal_edit');
});*/

document.getElementById('newBookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const bookCard = document.getElementById('book-card');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    bookCard.innerHTML = `
        <h2>${title}</h2>
        <h3>Author: ${author}</h3>
        <p>Number of Pages: ${pages}</p>
        <p>Read: ${read ? 'Yes' : 'No'}</p>
    `;

    document.getElementById('modalActive').style.display = 'none';
});
document.getElementById('delete-book-btn').addEventListener('click', function () {
    document.getElementById('book-card').innerHTML = '';
    document.getElementById('modalActive').style.display = 'none';
});
function openForm() {
    //document.getElementById('modalActive').style.display = 'block';
    this.modal.open('modalActive');
}
/*document.getElementById('add-btn').addEventListener('click', function () {
    openForm();
});*/