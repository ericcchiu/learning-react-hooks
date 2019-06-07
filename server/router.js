const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/', (req, res) => {
  res.send('Welcome to the react boiler plate');
});

/* GET/ todos : Retrieve a list of todos */
router.get('/todolist', async(req, res) => {
  try {
    let response = await axios.get('https://todolist-ebce0.firebaseio.com/todos.json');
    res.status(200).send(await response.data);
  } catch(error) {
    res.status(404).send(error);
  }
});

/* POST/ todos : Save a single todo */ 
router.post('/todo', async(req, res) => {
  // console.log('content: ', req.body)
  // res.send(req.body)
  try {
    await axios.post('https://todolist-ebce0.firebaseio.com/todos.json', req.body)
    res.status(201).send('Todo Created');
  } catch(error) {
    res.status(400).send('Error saving todo');
  }
});

module.exports = router; 