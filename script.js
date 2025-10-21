//This is a library book manager that oversees a series of books
// and sorts them via title author genre etc..


/*  Here is the array example before the conversion to JSON, so we can
make it more editable and add entries. :)))))
let library = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fiction",
    releaseDate: "10/21/1998", 
    isbn: "0-590-35340-3",     
    pageCount: 309           
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    releaseDate: "07/08/1949", 
    isbn: " 0-15-166038-7",     
    pageCount: 314    
  }
];
*/


//initialize the empty array that is going to store the other things
let library = [];

//fetch the data in this function
async function loadLibrary() {
    try {
        const response = await fetch('library.json');
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        const books = await response.json(); //parses the json file
        library = books; // load the book data into our library array
        
        //call the function to display the library
        displayBooksInGrid();
    } catch (error) {
        console.error("Could not fetch the library data sorry man", error);
    }
}


// Function dynamically creates and displays books in card in the html frontend
function displayBooksInGrid() {
    const container = document.querySelector('.library-container');
    container.innerHTML = '';

    for (const book of library) {
        //create the main card container
        const bookCard = document.createElement('div');
        //adds class from stylesheet i guess
        bookCard.className = 'book-card'; 

        //create and populate all the child elements
        const title = document.createElement('h2');
        title.className = 'book-title';
        title.textContent = book.title;

        const author = document.createElement('p');
        author.className = 'book-author';
        author.textContent = `Author: ${book.author}`;

        const genre = document.createElement('p');
        genre.className = 'book-genre';
        genre.textContent = `Genre: ${book.genre}`;

        const releaseDate = document.createElement('p');
        releaseDate.className = 'book-release-date';
        releaseDate.textContent = `Release Date: ${book.releaseDate}`;

        const isbn = document.createElement('p');
        isbn.className = 'book-isbn';
        isbn.textContent = `ISBN: ${book.isbn}`;

        const pageCount = document.createElement('p');
        pageCount.className = 'book-page-count';
        pageCount.textContent = `Pages: ${book.pageCount}`;

        //append all new elements to the book card
        bookCard.append(title, author, genre, releaseDate, isbn, pageCount);

        //append the completed card ot hte main grid container
        container.appendChild(bookCard);
    }
}

//load the library process
loadLibrary();