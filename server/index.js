const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
require('dotenv').config();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(cors());
app.use(router);


const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server listening on port ${port}`));