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

