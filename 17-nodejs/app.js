// NODE JS INTRO
/*
// This line pulls in the http object that we use to perform other things
const http = require('http');

function handleRequest(request, response) {
  if (request.url === '/currenttime') {
    response.statusCode = 200;
    // new Date() creates a new date object, .toISOString() is a method that converts it into a readable string. 
    response.end('<h1>' + new Date().toISOString() + '</h1>');
  } else if (request.url === '/') {
    response.statusCode = 200; // 200 = success, 404 = error
    response.end('<h1>Hello World!</h1>'); // .end(data) ends the response and sends it with the data that is passed
  }
}

const server = http.createServer(handleRequest); // passing handleRequest assigns it as the function that is called for incoming requests. It is a request listener. It also does handles sending the response.
server.listen(3000); // Starts the new server listening on a port 3000, a development port. 80 and 443 are for active websites
// amazon.com sends it to amazon.com:80 --> amazon.com:'port #'
*/

// Enhancing Nodejs w/ Express
const fs = require('fs'); // creates file system package object
const path = require('path');

const express = require("express"); // express is a function here, not an object like http

const app = express(); // creates app object

app.use(express.urlencoded({extended: false})); // applied to all requests. express.urlencoded listens for data and parses it into a js object that can be used.

app.get('/currenttime', function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // GET's localhost:3000/currenttime and executes 'anonymous' function

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
  );
}); // GET localhost:3000/

app.post('/store-user', function (req, res) {
  // .body is basically a js object where keys(in this case, from the form posted) are stored
  const userName = req.body.username;

  // creates path by joining __dirname(the root project folder) plus the 'data' folder and 'users.json' file. like 17-nodejs\data\users.json
  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath); // the raw data read from that file, not a js object/array
  const existingUsers = JSON.parse(fileData); // translates the raw data to a js array

  existingUsers.push(userName);
  // you just made userName into a js array to push it to the json file array, in order to save that file you must convert it back to a raw string with the stringify method
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send('<h1>Username stored!</h1>');
});

app.get('/users', function (req, res) {
  // 1 define a path
  const filePath = path.join(__dirname, 'data', 'users.json');
  // 2 get data stored as raw
  const fileData = fs.readFileSync(filePath);
  // 3 parse data into JSON
  const existingUsers = JSON.parse(fileData);

  let responseData = '<ul>';
  for (const user of existingUsers) {
    responseData += '<li>' + user + 'test' + '</li>';
  }
  responseData += '</ul>'

  res.send(responseData);
})

app.listen(3000); // creates server set to port 3000
