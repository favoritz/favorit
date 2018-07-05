//app.js


App({
  data: {
    'tempdata':'',
    'url':'http://www.bestbas.ca/api/v1/',
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
    //this.data.profile = this.data.testprofile
    
  }
})