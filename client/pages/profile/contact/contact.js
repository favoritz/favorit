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
    'tempemail':null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 'profile': getApp().data.profile })
  },
  edit:function(e){
    this.setData({'display':false})
  },
  submit:function(e){
    var that = this
    wx.request({
      url: getApp().data.url+'updateinfo/'+getApp().data.sessionid,
      data: {'phone':this.data.tempphone,'email':this.data.tempemail},
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if(data.tempphone){
          getApp().data.profile.phone = this.data.tempphone
        }
        if(data.tempemail){
          getApp().data.profile.email = this.data.email
        }
        that.setData({ 'profile': getApp().globalData.profile })
        that.setData({ 'display': true })
      },
      fail: function(res) {
        wx.showModal({
          title: '错误',
          content: ''+res.errMsg,
          showCancel: false,
          cancelText: '',
          cancelColor: '',
          confirmText: '确认',
          confirmColor: '',
        })
      },
      complete: function(res) {},
    })
  },
  modifyphone:function(e){
    console.log(e)
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