const db = require('../db');

module.exports = function paramCheck(req, res, next) {
  const { phone, company, service } = req.body;

  let message = 'Please provide ';
  if(!phone) {
    res.status(400).json({
      success: false,
      message: message + 'phone!'
    })  
  };
  if(!company) {
    res.status(400).json({
      success: false,
      message: message + 'company!'
    })  
  };
  if(!service) {
    res.status(400).json({
      success: false,
      message: message + 'service!'
    })  
  };

  next();
}
