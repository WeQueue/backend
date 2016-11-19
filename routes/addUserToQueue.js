var db = require('../db');

module.exports = function (req, res) {
  // const { phone, company, service } = req.body;
  // db[company][service].push(phone);
console.log(res)
  res.json({
    success: true,
    message: `phone number successfully add into the queue`,
  })
}