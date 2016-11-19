const axios = require('axios');

(async () => {
  try {
    const postUserRes = await axios.post('http://localhost:3000/user', {
      phone: '18717777130',
      company: 'icbc', 
      service: 'cash'
    });
    console.log(postUserRes.data);

    const postUser2Res = await axios.post('http://localhost:3000/user', {
      phone: '18717777131',
      company: 'icbc', 
      service: 'cash'
    });

    console.log(postUser2Res.data);

    const deleteUserRes = await axios.post('http://localhost:3000/deleteUser', {
      phone: '18717777130',
      company: 'icbc', 
      service: 'cash'
    });

    console.log(deleteUserRes.data);

  } catch (error) {
    console.log(error);
  }
})()
