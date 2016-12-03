'use strict'
var db = require('../db');

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

  const queuePosition = db[company][service]['queue'].indexOf(phone);
  const waitTime = queuePosition * 5;
  const queueLength = db[company][service]['queue'].length;

  res.json({
    company, service, queuePosition, waitTime, queueLength,
    success: true,
    message: `phone number successfully added into the queue`,
  })
}