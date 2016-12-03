'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');
const addUserToQueue = require('./routes/addUserToQueue');
const deleteUserFromQueue = require('./routes/deleteUserFromQueue');
const getServices = require('./routes/getServices');
const paramCheck = require('./middlewares/paramCheck');
const getPosition = require('./routes/getPosition');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// user api
app.get('/services/:company', getServices);
app.post('/user', paramCheck, addUserToQueue);
app.post('/deleteUser', deleteUserFromQueue);
app.post('/getPosition', paramCheck, getPosition);

//var PORT = process.env.PORT;
var PORT = 8080

app.listen(PORT, function(){
    console.log(`API magic happens: ${process.env.PORT}`);
});
