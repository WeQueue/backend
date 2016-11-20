const axios = require('axios');
const baseUrl = 'https://wequeue-timqian1.c9users.io';
(async () => {
  try {
    const postUserRes = await axios.post(`${baseUrl}/user`, {
      phone: '18717777130',
      company: 'icbc', 
      service: 'cash'
    });
    console.log(postUserRes.data);

    const postUser2Res = await axios.post(`${baseUrl}/user`, {
      phone: '18717777131',
      company: 'icbc', 
      service: 'cash'
    });

    console.log(postUser2Res.data);

   const getPositionRes = await axios.post(`${baseUrl}/getPosition`, {
      phone: '18717777130',
      company: 'icbc', 
      service: 'cash'
    });

    console.log(getPositionRes.data);

    const deleteUserRes = await axios.post(`${baseUrl}/deleteUser`, {
      phone: '18717777130',
      company: 'icbc', 
      service: 'cash'
    });

    console.log(deleteUserRes.data);

  //  const getPosition2Res = await axios.post(`${baseUrl}/getPosition`, {
  //     phone: '18717777130',
  //     company: 'icbc', 
  //     service: 'cash'
  //   });

  //   console.log(getPosition2Res.data);

    const deleteUser2Res = await axios.post(`${baseUrl}/deleteUser`, {
      company: 'icbc', 
      service: 'cash'
    });

    console.log(deleteUser2Res.data);

  } catch (error) {
    console.log(error);
  }
})()
