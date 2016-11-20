'use strict'
const db = require('../db');
const sendSMS = require('../utils/sendSMS');

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

  if(phone) {
    const indexOfPhone = db[company][service]['queue'].indexOf(phone);
    db[company][service]['queue'].splice(indexOfPhone, 1);
  } else {
    db[company][service]['queue'].shift();
  }
  

  const queuePosition = db[company][service]['queue'].length;
  const waitTime = queuePosition * 5;

  if(db[company][service]['queue'][2]) {
      sendSMS(db[company][service]['queue'][2], 2, 10, function(err, res) {
      if(err) {
        
        res.json({
          success: false,
          message: `sending sms to "${db[company][service]['queue'][2]}" failed`,
        });  
      } else {
        console.log(res)
      }
    });
  }


  res.json({
    company, service, queuePosition, waitTime, 
    success: true,
    message: `"${phone}" deleted!`,
    queue: db[company][service]['queue']
  });
}