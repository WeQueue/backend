const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');
const addUserToQueue = require('./routes/addUserToQueue');
const deleteUserFromQueue = require('./routes/deleteUserFromQueue');
const paramCheck = require('./middlewares/paramCheck');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// user api
app.post('/user', paramCheck, addUserToQueue);
app.post('/deleteUser', paramCheck, deleteUserFromQueue);

app.listen(3000);
console.log('API magic happens at http://localhost:3000');
