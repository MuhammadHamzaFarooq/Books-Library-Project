console.log("Welcome to Magic Library");
// Todos stores all the data to the loaclstorage 
// Give another coloumn as an option to delete the book
// add a scoroll bar to view 


// Constructor 
function Book(name, author, type) {
    this.name = name;
    this.type = type;
    this.author = author;
}

// Display Constructor
function Display() {

}


// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;
    tableBody.innerHTML += uiString;
};

// Implement the clear funciton
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

// Implement the validate funciton
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.name.length < 3) {
        return false;
    }
    else {
        return true;
    }
};

// Implement the show funciton
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = ` 
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message</strong> ${displayMessage}
                            <button type="button" class="close" date-dismiss="alert" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = '';
    }, 3000);
};


// Add submit event listner to form 
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("You have submited library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    // creating object
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cantnot add this book .')
    }
}