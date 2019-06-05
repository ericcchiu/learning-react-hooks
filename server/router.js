const express = require('express');
const router = express.Router();
require('dotenv').config();


router.get('/', (req, res) => {
  res.send('Welcome to the react boiler plate');
});

module.exports = router; 