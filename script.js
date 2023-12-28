const myLibrary = [];
const bookInput = document.querySelectorAll('.book-input')
const books = document.querySelector('.books')
const addBook = document.querySelector('.newBookForm')
const newBookButton = document.querySelector('.add-book')  
const addBookButton = document.querySelector('.add-book-button')

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(
        bookInput[0].value, 
        bookInput[1].value, 
        bookInput[2].value, 
        bookInput[3].checked)
    myLibrary.push(newBook)
}


newBookButton.addEventListener('click', () => {  
    for (i = 0; i < 3; i++){     
        bookInput[i].value = ''
    }               
    hideOnOutsideClick()
    addBook.style.display = ('grid')         
})


addBookButton.addEventListener('click', () => {
    
    for (i = 0; i < 3; i++){     
        if (!bookInput[i].value) return
    }

    addBookToLibrary()                     
    printLibrary()
    addBook.style.display = 'none'
})
function hideOnOutsideClick() {
    document.addEventListener( 'click', (event) => {
        const withinBoundaries = event.composedPath().includes(addBook);
     
        if ( ! withinBoundaries ) {	
            addBook.style.display = 'none'    
        }
    
    }, once = true)
}
addBook.addEventListener("submit", (e) => {
    e.preventDefault();  
})
function printLibrary(){                                              
    const booksListBefore = document.querySelector('.book-list')
    books.removeChild(booksListBefore)
    
    const booksListAfter = document.createElement('div')
    booksListAfter.classList.add('book-list')
    
    for(let unit of myLibrary){                                       
        const card = document.createElement('div')
        const bookTitle = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const statusButton = document.createElement('button')
        const removeButton = document.createElement('button')
        
        card.classList.add('card')
        bookTitle.classList.add('bookTitle')
        bookAuthor.classList.add('bookAuthor')
        bookPages.classList.add('bookPages')
        statusButton.classList.add('statusButton')
        removeButton.classList.add('removeButton')
        

        bookTitle.textContent =  unit.title
        bookAuthor.textContent = 'By ' + unit.author
        bookPages.textContent = unit.pages + ' pages'
        let status = 'NOT READ'
        statusButton.style.backgroundColor = 'rgb(177, 88, 88)'
        if (unit.status) {
            status = 'READ'
            statusButton.style.backgroundColor = 'rgb(41, 75, 40)'
        }
        statusButton.textContent = status
        removeButton.textContent = 'DELETE'

        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(bookPages)
        card.appendChild(statusButton)
        card.appendChild(removeButton)
        booksListAfter.appendChild(card)
        console.log(unit)     
    }
    
    books.appendChild(booksListAfter)
    removeButtonEvents()
    statusButtonEvents()
    addBook.style.display = 'none'  
}

printLibrary()

function removeButtonEvents(){                                         
    const removeButtons = document.querySelectorAll('.removeButton')
    let removeButtonsArray = Array.from(removeButtons)
    removeButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
                myLibrary.splice(removeButtonsArray.indexOf(button),1);
                printLibrary()
        });
    });
}
function statusButtonEvents(){                                      
    const statusButtons = document.querySelectorAll('.statusButton')
    let statusButtonsArray = Array.from(statusButtons)
    
    statusButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
                myLibrary[statusButtonsArray.indexOf(button)].status = 
                !(myLibrary[statusButtonsArray.indexOf(button)].status)
                
                printLibrary()
        });
    });
}