document.addEventListener("DOMContentLoaded", function() { 
    const bookList = document.querySelector('#book-list');
    const bookDetails = document.querySelector('#book-details');
    const searchInput = document.querySelector('#search-input');
    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    // Check if elements exist
    if (!bookList || !bookDetails || !searchInput || !darkModeToggle) {
        console.error("Some required elements are missing in the DOM.");
        return;  // Exit if any elements are missing
    }

    const books = [
        { id: 1, title: "Wuthering heights", author: "Abu Justice", description: "Ask morayo.", cover: "just.jpg" },
        { id: 2, title: "Skally my friend", author: "Anonymous", description: "Romantic novel of manners.", cover: "just1.jpg" },
        { id: 3, title: "Justice for Sam", author: "Neferopitou", description: "A novel on racial injustice.", cover: "just12.jpg" },
        { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "Tragic story of Jay Gatsby.", cover: "yes34.jpg" }
    ];

    function displayBooks(bookArray) {
        bookList.innerHTML = '';
        bookArray.forEach(book => {
            const li = document.createElement('li');
            li.className = 'book-item';
            li.dataset.id = book.id;
            li.textContent = `${book.title} by ${book.author}`;
            bookList.appendChild(li);
        });
    }

    function displayBookDetails(bookId) {
        const selectedBook = books.find(book => book.id === parseInt(bookId));
        if (selectedBook) {
            bookDetails.innerHTML = `
                <h2>${selectedBook.title}</h2>
                <h3>by ${selectedBook.author}</h3>
                <img src="images/${selectedBook.cover}" alt="${selectedBook.title}">
                <p>${selectedBook.description}</p>
            `;
        }
    }

    function searchBooks(query) {
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
        displayBooks(filteredBooks);
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const modeText = darkModeToggle.textContent.includes('Enable') ? 'Disable Dark Mode' : 'Enable Dark Mode';
        darkModeToggle.textContent = modeText;
    }

    // Event listeners
    bookList.addEventListener('click', function(event) {
        if (event.target.classList.contains('book-item')) {
            displayBookDetails(event.target.dataset.id);
        }
    });

    searchInput.addEventListener('input', function(event) {
        searchBooks(event.target.value);
    });

    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Initial list of books
    displayBooks(books);
});
