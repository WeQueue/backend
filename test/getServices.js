'use strict'
const axios = require('axios');

const baseUrl = 'https://wequeue-timqian1.c9users.io';

axios.get(baseUrl + '/services/icbc').then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})