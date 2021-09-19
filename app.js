/*
 function Book(title, author, totalPages, read){
   this.title = title;
   this.author = author;
   this.totalPages = totalPages;
   this.read = null;
   this.info = function(){
     if(read === true){
        read = 'You read it'
      }else{
        read = 'You haven\'t read it'
      }
     return `${title}, ${author}, ${totalPages}, ${read}`
   }
 }

 const book1 = new Book('IQ84', 'Murakami', '534', true);
 const book2 = new Book('The Bible', 'Who knows', '999', false);
*/

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
}
  
Book.prototype.info = function(read){
  if(read === true){
    read = 'You read it'
  }else{
    read = 'You haven\'t read it'
  }
  return `${this.title}, ${this.author}, ${this.totalPages}, ${read}`
}
  
  
const book1 = new Book('IQ84', 'Murakami', '534', true);
const book2 = new Book('The Bible', 'Who knows', '999', false);

let myLibrary = [book1, book2];

/*
Write a function that loops through the array and displays each book on the page. 
*/

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

  cardDiv.className = 'card';
  authorDiv.className = 'author';
  titleDiv.className = 'title';
  pagesDiv.className = 'pages';
  readDiv.className = 'read';
  removeButton.className = 'book-button';

  authorDiv.textContent = 'Author:';
  titleDiv.textContent = 'Title:';
  pagesDiv.textContent = 'Pages:';
  readDiv.textContent = 'Read:';
  removeButton.textContent = 'Remove';
};

function addBookToLibrary(){

};
 
makeCard();
makeCard();

console.log(myLibrary[0]);