function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // comes as a string adding + yields 1 as a num
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none'; 
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ''; //resetting input via dom traversal
}

function savePlayerConfig(event) {
  event.preventDefault();
  // This is called instantiating an object based on an object blueprint. It's of the 'new' keyword. event.target is passed to FormData.
  const formData = new FormData(event.target);
  // This lets us access the information in the stored form object and from the input with name="playername" and store it in a varible. .trim() trims off excess white space before/after content ' Tim F   '  becomes 'Tim F'
  const enteredPlayername = formData.get('playername').trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}



