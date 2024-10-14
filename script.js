// 1. Exploring JavaScript Objects

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

// Task 2: Implement a method within the Book object to display book information.

Book.prototype.displayInfo = function() {
    console.log("Displaying info for", this.title + ":\nAuthor:", this.author, "\nPages:", this.pages)
};

let catch22 = new Book('Catch 22', 'Joseph Heller', 430);
let huckfinn = new Book('Huckleberry Finn', 'Mark Twain', 325);
let gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 215);
let catInTheHat = new Book('Cat In The Hat', 'Dr. Seuss', 30);

catch22.displayInfo();

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = [catch22, huckfinn, gatsby, catInTheHat];

function addBook(book) {
    library.push(book)
};

function searchByTitle(queryTitle) {
    for (let book = 0; book < library.length; book++) {
        if (library[book].title == queryTitle) {
            console.log("The book your after is in our library. Here are the details:", library[book])
        };
    };
};

function searchByAuthor(queryAuthor) {
    for (let book = 0; book < library.length; book++) {
        if (library[book].author == queryAuthor) {
            console.log("Books by", queryAuthor, "are available. Here are the details:", library[book])
        };
    };
};

searchByTitle('The Great Gatsby');
searchByAuthor('Mark Twain');

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function booksByPageCount(pageCount) {
    let filteredList = library.filter(book => book.pages < pageCount);
    filteredList.map(book => {
        book.title = "Title: " + book.title;
        book.author = "Author: " + book.author;
        return book;
    });
    console.log("New List", filteredList);
};

booksByPageCount(100);

// 2. Exploring Objects and Math in JavaScript

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
};

let account1 = new Account(1, 15000, 'Bob McAdoo');

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

Account.prototype.deposit = function(moolah) {
    this.balance += moolah;
    console.log("Balance after deposit:", this.balance);
};

account1.deposit(1000);


Account.prototype.withdraw = function(moolah) {
    this.balance -= moolah;
    console.log("Balance after withdrawal:", this.balance);
};

account1.withdraw(1000);

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. 

Account.prototype.calculateInterest = function(rate, frequencyPerYear, TimeInYears) {
    let interest = this.balance * (1 + rate / frequencyPerYear) ** (TimeInYears * frequencyPerYear);
    return console.log("Compound interest:", interest);
}

account1.calculateInterest(.15, 4, 5);