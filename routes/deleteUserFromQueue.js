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

  const indexOfPhone = db[company][service].indexOf(phone);
  db[company][service].splice(indexOfPhone, 1);

  const queuePosition = db[company][service].length;
  const waitTime = queuePosition * 5;

  res.json({
    company, service, queuePosition, waitTime,
    success: true,
    message: `"${phone}" deleted `
  });
}