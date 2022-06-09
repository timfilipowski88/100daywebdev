// // To Get javascript document object use .dir() built in method
// // console.dir(document); document could be substituted for any other node/element

// // document.body.children[1].children[0].href = 'https://google.com';

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('#external-link')
// anchorElement.href = 'https://webdevgarden.com'

// let psss = document.querySelectorAll('p');
// console.log(psss);

// // Exercise Time!

// // 1. Select the <h1> element by "drilling into the DOM" and 
// //    save it in a variable with a name of your choice

// let title = document.body.children[0];

// // 2. Use the variable from (1) and get access to the "parent"
// //    element of the stored <h1> element (i.e. to the <body> element)
// //    BONUS: Try using the variable from (1) to get access to the 
// //    sibling element (i.e. the <p> element next to the <h1> element)

// console.log(title);
// console.dir(title);
// let parentBody = title.parentElement;
// console.log(parentBody);
// let pSibling = title.nextElementSibling;
// console.log(pSibling);

// // 3. Select the <h1> element with getElementById and store in
// //    the same or a new variable (up to you)

// title = document.getElementById('first-title');
// console.log(title);

// // 4. Select the second <p> element with querySelector (you might
// //    need to add something in the HTML code, e.g. a class) 
// //    and store it in a new variable with a name of your choice

// let linkParagraph = document.querySelector('.highlighted-paragraph');
// console.log(linkParagraph);

// // 5. BONUS TASK: Try changing the text content of the <p> element
// //    you selected in (4) and set it to any other text of your choice

// linkParagraph.textContent = 'You changed the content with JavaScript!';

// ADD AN ELEMENT
// 1. Create the new Element 
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'this leads to google';
// 2. Get access to the parent element that should hold the new content 
let firstParagraph = document.querySelector('p');
// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select Element
let firstH1Element = document.querySelector('h1');
// 2. Remove it!
// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
firstParagraph.innerHTML = 'Hi! is <strong>important!</strong>';