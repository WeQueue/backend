const axios = require('axios');

axios.post('http://localhost:3000/user', {
  phone: '18717777130',
  company: 'icbc', 
  service: 'personal'
}).then(res => {
  console.log(res.data);
}).catch(err=>{
  console.log(err)
});