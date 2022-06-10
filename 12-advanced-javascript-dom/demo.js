const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;
  // const can have their attributes changed in this case because they are redefined at each function call
  remainingCharsElement.textContent = remainingCharacters;
  if (remainingChars === 0) {
    productNameInputElement.classList.add('error');
    remainingCharsElement.classList.add('erorr');
  } else if (remainingCharacters <= 10) {
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
  } else {
    productNameInputElement.classList.remove('warning', 'error');
    remainingCharsElement.classList.remove('warning', 'error');
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);