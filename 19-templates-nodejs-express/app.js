const express = require('express');

const app = express();

const path = require('path');

const fs = require('fs');

app.use(express.static('public')); // sets up a request handlers for static files in the passed in folder name, public is a common name for this folder. Requests stop here and are checked to see if they are static files before they continue on with the other routes in this document

app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'index.html')
  res.sendFile(htmlFilePath);
});

app.get('/restaurants', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
  res.sendFile(htmlFilePath);
});

app.get('/recommend', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
  res.sendFile(htmlFilePath);
})

app.get('/confirm', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  res.sendFile(htmlFilePath);
});

app.get('/about', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(htmlFilePath);
});


app.listen(3000);