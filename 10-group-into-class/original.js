function printBookInfo(title, author, isbn, pages) {
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`ISBN: ${isbn}`);
    console.log(`Pages: ${pages}`);
}

function validateBookInfo(title, author, isbn, pages) {
    const info = fetchBookInfo(isbn);
    if (info.title !== title || info.author !== author || info.pages !== pages) {
        return false;
    }
    return true;
}

function addBookToLibrary(title, author, isbn, pages) {
    // add book to library
}

function promoteBook(title, author, isbn, pages) {
    // show book on homepage
}

// more functions that use book info
