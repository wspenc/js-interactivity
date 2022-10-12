//run addMovie function once submit or "add" is clicked 
//chained due to the form element
document.querySelector('form').addEventListener('submit', addMovie);
//Will be used to display message after action takes place (deleting a movie)
const message = document.querySelector('#message');

//add movie once add is clicked
function addMovie(event) {
event.preventDefault()
const inputField = document.querySelector('input');

//Creates an element that'll store movie in list, as well as a new span element (keeps it inline)
const movie = document.createElement('li')
const movieTitle = document.createElement('span');
//New span that prints title that was inputted
movieTitle.textContent = inputField.value;
movieTitle.addEventListener('click', crossOffMovie)

//Adds a new node "Movie Title" to DOM
movie.appendChild(movieTitle);

//delete button
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'X'
deleteBtn.addEventListener("click", deleteMovie);
//Replace the parent once "X" is clicked
movie.appendChild(deleteBtn);

//Will create un-ordered list once movie title is found
const list = document.querySelector('ul');
list.appendChild(movie);
inputField.value = ' '
} 

//delete function
function deleteMovie(event) {
    message.textContent = 'Movie Deleted'
    revealMessage()
    event.target.parentNode.remove();
 }

 //Create strike through that will "add a movie back" or "watched"
function crossOffMovie(event)  {
    event.target.classList.toggle('checked')
        if(event.target.classList.contains('checked') === true){
            message.textContent = 'Movie watched!'
        } else {
            message.textContent = 'Movie added back!'
        }
        revealMessage()
}

function revealMessage(){
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}