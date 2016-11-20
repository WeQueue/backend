'use strict'
const db = require('../db');

module.exports = function paramCheck(req, res, next) {
  // const { phone, company, service } = req.body;
  const phone = req.body.phone;
  const company = req.body.company;
  const service = req.body.service;
  

  let message = 'Please provide ';
  if(!phone) {
    res.status(400).json({
      success: false,
      message: message + 'phone!'
    })  
    return;
  };
  if(!company) {
    res.status(400).json({
      success: false,
      message: message + 'company!'
    })  
    return;
  };
  if(!service) {
    res.status(400).json({
      success: false,
      message: message + 'service!'
    })  
    return;
  };

  next();
}
