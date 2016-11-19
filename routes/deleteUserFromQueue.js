var db = require('../db');

module.exports = function (req, res) {
  const { phone, company, service } = req.body;
  const indexOfPhone = db[company][service].indexOf(phone);
  
}