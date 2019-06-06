const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/', (req, res) => {
  res.send('Welcome to the react boiler plate');
});

router.post('/savetodo', async(req, res) => {
  // console.log('content: ', req.body)
  // res.send(req.body)
  try {
    await axios.post('https://todolist-ebce0.firebaseio.com/todos.json', req.body)
  } catch(error) {
    res.status(201).send('Error saving todo');
  }
});

module.exports = router; 