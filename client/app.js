//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData: {
    'sessionid':null,
    'profile': null,
    'testprofile':{
      'username':'这是一个username',
      'todocount':21,
      'donecount':31,
      'wechatid':'jsdofijsdo',
      'phone':'53128631',
      'email':'fjaiowef'
    },
    'modifyparameter':null
  },
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  }
})