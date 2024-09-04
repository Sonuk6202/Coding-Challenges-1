// List of books with their authors and publication years
const books = [
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Help", author: "Kathryn Stockett", year: 2009 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "The Goldfinch", author: "Donna Tartt", year: 2013 },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", year: 2014 }
];

// Function to capitalize author names
function capitalizeName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year > 2010) // Filter books published after 2010
        .map(book => ({
            title: book.title,
            author: capitalizeName(book.author), // Capitalize the author's name
            year: book.year
        }));
}

// Function to display the books in the DOM
function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous content
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author} (${book.year})`;
        bookList.appendChild(listItem);
    });
}

// Filter and capitalize books
const filteredBooks = filterAndCapitalizeBooks(books);

// Display the filtered and capitalized books
displayBooks(filteredBooks);
