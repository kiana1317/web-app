// express necessary for api
const express = require('express');

//api setup
const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});

//route setup
api.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
});
