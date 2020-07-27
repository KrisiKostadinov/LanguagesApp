const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

require('./config/db');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/words'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server listening on: ' + port));