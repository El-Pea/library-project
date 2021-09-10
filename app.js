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

var parentElement = book-info // i need to give these three names i think

add child div to parent element with Book.

*/

/*
function addBookToLibrary(){
  const libraryElement = document.querySelector('.library');
  libraryElement
              .appendChild(document.createElement('div'))
              .className = 'card';

  const card = document.querySelector('.card');
  card  
      .appendChild(document.createElement('div'))
      .className = 'author';


}
*/

function addBookToLibrary(){
  const libraryElement = document.querySelector('.library');
  let fragment = document.createDocumentFragment();
  let book = myLibrary;

  fragment
        .appendChild(document.createElement('div'))
        .className = 'card';
  
  libraryElement.appendChild(fragment);

};

// here try this: https://stackoverflow.com/questions/47763249/creating-nested-divs-using-javascript

addBookToLibrary();

console.log(myLibrary[0])