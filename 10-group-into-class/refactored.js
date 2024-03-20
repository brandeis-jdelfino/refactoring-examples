class BookInfo {
    constructor(title, author, isbn, pages) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
    }
}

// We've simplified these function signatures by grouping the related parameters into a single class.
function printBookInfo(info) {
    console.log(`Title: ${info.title}`);
    console.log(`Author: ${info.author}`);
    console.log(`ISBN: ${info.isbn}`);
    console.log(`Pages: ${info.pages}`);
}

function validateBookInfo(toCheck) {
    const info = fetchBookInfo(toCheck.isbn);
    if (info.title !== toCheck.title || info.author !== toCheck.author || info.pages !== toCheck.pages) {
        return false;
    }
    return true;
}

function addBookToLibrary(info) {
    // add book to library
}

function promoteBook(info) {
    // show book on homepage
}
