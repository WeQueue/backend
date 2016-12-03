TopClient = require('./topClient').TopClient;
var client = new TopClient({
  'appkey': '23538806',
  'appsecret': 'af5cd4ae2e78dc3153eb4b13fb0fd9e1',
  'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

module.exports = function sendSMS(phone, num, time, cb) {
  var param = "{num:'"+ num + "',time:'" + time + "'}";

  client.execute('alibaba.aliqin.fc.sms.num.send', {
    'extend' : '' ,
    'sms_type' : 'normal' ,
    'sms_free_sign_name' : '排队帮' ,
    'sms_param' : param,
    'rec_num' : phone ,
    'sms_template_code' : "SMS_27330094"
  }, cb);
}
