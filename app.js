/***************************************************
 * MODAL
 */
 const modal = document.querySelector(".modal");
 const trigger = document.querySelector(".submit-button");
 const closeButton = document.querySelector(".close-button");
 const confirmButton = document.querySelector(".confirm-button");

 function toggleModal() {
     modal.classList.toggle("show-modal");
 }

 function windowOnClick(event) {
     if (event.target === modal) {
         toggleModal();
     }
 }

 trigger.addEventListener("click", toggleModal);
 closeButton.addEventListener("click", toggleModal);
 confirmButton.addEventListener("click", toggleModal);
 window.addEventListener("click", windowOnClick);

/***************************************************
 * LIBRARY
 */

function Book(title, author, totalPages, read){
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.read = read;
}

//https://stackoverflow.com/questions/31714434/declaring-vs-initializing-a-variable 

// declared manually that readStatus is undefined (check my premise)
Book.prototype.info = function(){
  let readStatus = undefined;
  if(this.read){
    readStatus = 'You read it'
  }else{
    readStatus = 'You haven\'t read it'
  }
  return readStatus;
}

// protocol initializies readStatus as undefined. 
/*
Book.prototype.info = function(readStatus){
  if(this.read){
    readStatus = 'You read it'
  }else{
    readStatus = 'You haven\'t read it'
  }
  return readStatus;
}
*/
  
const book1 = new Book('IQ84', 'Murakami', '534', true);
const book2 = new Book('The Bible', 'Who knows', '999', false);
const book3 = new Book('The Gunslinger', 'Stephen King', '243', true);
const book4 = new Book('Manhattan Chowder', 'Fran Leibowitz', '11', false);

let myLibrary = [book1, book2, book3, book4];

/*
Write a function that loops through the array and displays each book on the page. 
*/

let idCount = 0;

function makeCard(){
  const libraryElement = document.querySelector('.library');;
  let cardDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let author = document.createElement('div');
  let titleDiv = document.createElement('div');
  let title = document.createElement('div');
  let pagesDiv = document.createElement('div');
  let pages = document.createElement('div');
  let readDiv = document.createElement('div');
  let removeButton = document.createElement('button');

  libraryElement.appendChild(cardDiv);
  cardDiv.append(authorDiv, author, titleDiv, title, pagesDiv, pages, readDiv, removeButton);  

  idCount++;
  cardDiv.id = `card-${idCount}`;
  author.id = `author-${idCount}`;
  title.id = `title-${idCount}`;
  pages.id = `pages-${idCount}`;
  readDiv.id = `readDiv-${idCount}`;

  cardDiv.className = 'card';
  removeButton.className = 'book-button';

  authorDiv.textContent = 'Author:';
  titleDiv.textContent = 'Title:';
  pagesDiv.textContent = 'Pages:';
  readDiv.textContent = 'Read:';
  removeButton.textContent = 'Remove';
};

function addBookToLibrary(){
  myLibrary.forEach((book) =>{
    makeCard();
    document.getElementById(`author-${idCount}`).textContent = book.author;
    document.getElementById(`title-${idCount}`).textContent = book.title;
    document.getElementById(`pages-${idCount}`).textContent = book.totalPages;
    document.getElementById(`readDiv-${idCount}`).textContent = book.info();
  });
};

addBookToLibrary();

/*
makeCard();
makeCard();
makeCard();
makeCard();

document.getElementById('author-1').textContent = book1.title;
*/

console.log(myLibrary);