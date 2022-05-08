// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButton = document.querySelector('button');
console.log(firstButton);
//    - Select the second button by using an "id"
const secondButton = document.getElementById('second-button')

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function variableClick() {
  console.log(firstButton);
}
firstButton.addEventListener('click', variableClick);
//    - Output the second button WITHOUT using the variable in which it's stored
function eventClick(event) {
  console.log(event.target);
}

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// const firstParagraph = document.body.children[0].children[2].children[2].children[1];
// const thirdParagraph = document.body.children[0].children[2].children[2].children[3];
// console.log(firstParagraph);

const firstParagraphId = document.getElementById('first-paragraph');
const thirdParagraphId = document.getElementById('third-paragraph');
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

// function removeElement() {
//   thirdParagraphId.parentElement.removeChild(thirdParagraphId);
// }
// firstButton.addEventListener('click', removeElement);

// function changeBackgroundColor() {
//   firstParagraphId.style.backgroundColor = 'blue';
// }
// secondButton.addEventListener('click', changeBackgroundColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function addRemoveClass() {
  thirdParagraphId.classList.add('remove');
}
firstButton.addEventListener('click', addRemoveClass);

function addBlueClass() {
  firstParagraphId.classList.add('blue');
}
secondButton.addEventListener('click', addBlueClass)