'use strict'
var db = require('../db');

module.exports = function (req, res) {
  const company = req.params.company;
  if(!db[company]) {
    res.status(400).json({
      success: false,
      message: 'no such company'
    });
    return;
  } 
  
  const services = Object.keys(db[company]).map(key => {
    return {
      service: key,
      serviceName: db[company][key]['displayName'],
      queueLength: db[company][key]['queue'].length
    };
  })
  
  res.json(services);
}

function keyToName(key) {
  let name = ''
  for (let i = key.length; i--;) {
      if(key[i].toUpperCase() === key[i]) {
          key = key.substr(0, i) + ' ' + key[i].toLowerCase() + key.substring(i+1);
      }
  }
  
  return key;
}