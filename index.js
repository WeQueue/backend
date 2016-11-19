const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');
const addUserToQueue = require('./routes/addUserToQueue');
const deleteUserFromQueue = require('./routes/deleteUserFromQueue');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// user api
app.post('/user', paramCheck, addUserToQueue);
app.delete('/user', paramCheck, deleteUserFromQueue);

app.listen(3000);
console.log('API magic happens at http://localhost:3000');


function paramCheck(req, res, next) {
  // const { phone, company, service } = req.body;
  // let message = 'Please provide ';

  // if(!phone) message += `phone!`;
  // if(!company) message += `company!`;
  // if(!service) message += `service!`;
  next()
}
