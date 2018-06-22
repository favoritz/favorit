// pages/profile/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'state': 1,
    'profile': null,
    'testprofile': {
      'username': '测试用本地用户名',
      'todocount': 21,
      'donecount': 31,
      'openid': 'jsdofijsdo',
      'phone': '53128631',
      'email': 'fjaiowef@gmail.com'
    },
    'tempdata': null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 'profile': getApp().globalData.profile })
  },

  modifyphone: function (e) {
    this.setData({ 'state': 3 })
  },
  modifyemail: function (e) {
    this.setData({ 'state': 4 })
  },
  confirmphone: function (e) {
    this.setData({ 'profile.phone': this.data.tempdata, 'state': 1 })
  },
  confirmemail: function (e) {
    this.setData({ 'profile.email': this.data.tempdata, 'state': 1 })
  },
  savetempdata: function (e) {
    this.setData({ 'tempdata': e.detail.value })
  },
  returntoone: function (e) {
    this.setData({ 'state': 1 })
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