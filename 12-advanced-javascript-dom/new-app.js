let paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked'
}

// changeParagraphText is a callback function here, it is only executed with the even occurs
// if it had be written as changeParagraphText() then the function would have fired when that line of code was read.
paragraphElement.addEventListener('click', changeParagraphText);


// Listening to user input
let inputElement = document.querySelector('input');
function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  // console.log(event);
}
// use 'input' instead of 'keyup' as this will react to items that are dragged and dropped as well
inputElement.addEventListener('input', retrieveUserInput);