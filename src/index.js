// express necessary for api
const express = require('express');
//api setup
const api = express();
// middleware function
api.use(express.static(__dirname + '/public'));


api.listen(3000, () => {
  console.log('API up and running!');
});

api.post('/add', (req, res) => {
 console.log('Post request received');
});

//route setup
// api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello, world!');
// });
