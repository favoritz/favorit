// pages/profile/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'display':true,
    'state': 1,
    'profile': null,
    'tempphone': null,
    'tempemail':null,
    'tempwxid':null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  edit:function(e){
    this.setData({'display':false})
  },
  
  modifyphone:function(e){
    this.tempphone = e.detail.value
  },
  modifyemail:function(e){
    this.tempemail = e.detail.value
  },
  modifywxid:function(e){
    this.tempwxid = e.detail.value
  },
  submit:function(e){
    var that = this
    console.log(getApp().data.sessionid)
    wx.request({
      url: getApp().data.url+'updateinfo',
      data: {
        'phone':this.tempphone,
        'email':this.tempemail,
        'wxid':this.tempwxid
      },
      header: {'token':getApp().data.sessionid},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if(res.data.error_code){
          if(res.data.error_code == 0){
            wx.showModal({
              title: '格式错误',
              content: '',
              showCancel: false,
              confirmText: '确认',
              confirmColor: '',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }else{
            console.log('error detected')
            getApp().data.sessionid = null
            wx.navigateBack({
              delta: 1,
            })
            wx.switchTab({
              url: '/pages/home/home',
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
          
        }
        console.log('success')
        console.log(res)
        getApp().data.profile.phone = res.data.mobile
        getApp().data.profile.wxid = res.data.wxid
        getApp().data.profile.email = res.data.email
        that.setData({ 'profile': getApp().data.profile })
        that.setData({display:!that.display})
      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ 'profile': getApp().data.profile })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})