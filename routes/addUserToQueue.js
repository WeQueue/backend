var db = require('../db');

module.exports = function (req, res) {
  const { phone, company, service } = req.body;
  if(!db[company]) {
    res.json({
      success: false,
      message: 'no such company'
    });

    if(!db[company][service]) {
      res.json({
        success: false,
        message: `no such service for ${company}`
      });
    }
  }

  db[company][service].push(phone);
  const queuePosition = db[company][service].length;
  const waitTime = queuePosition * 5;

  res.json({
    company, service, queuePosition, waitTime,
    success: true,
    message: `phone number successfully add into the queue`,
  })
}