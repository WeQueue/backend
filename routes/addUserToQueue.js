'use strict'
const db = require('../db');
const sendSMS = require('../utils/sendSMS');
const numbers = [1,1,1,1,1];

module.exports = function (req, res) {
  // const { phone, company, service } = req.body;
  const phone = req.body.phone;
  const company = req.body.company;
  const service = req.body.service;
  
  if(!db[company]) {
    res.status(400).json({
      success: false,
      message: 'no such company'
    });

    if(!db[company][service]) {
      res.status(400).json({
        success: false,
        message: `no such service for ${company}`
      });
      return;
    }
    return;
  }

  db[company][service]['queue'].push(phone);
  const queuePosition = db[company][service]['queue'].indexOf(phone);
  const waitTime = queuePosition * 5;
  const ticketNumber = (db[company][service]['ticketPrefix']) * 1000 + (db[company][service]['number']++);

  sendSMS(phone, queuePosition, waitTime, function(error, response){
    if(error) {
      const indexOfPhone = db[company][service]['queue'].indexOf(phone);
      db[company][service]['queue'].splice(indexOfPhone, 1);
      
      res.status(400).json({
        success: false,
        message: 'invalid phone number'
      });
    
    } else {
      res.json({
        company, service, queuePosition, waitTime, ticketNumber,
        success: true,
        message: `phone number successfully added into the queue`,
      });
    };
  });


}