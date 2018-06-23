// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    favorites: [
      
        
    ],
    hidden: false,
    inputShowed: false,
    inputVal: ""
  },

  onPostClick: function (e) {

    wx.navigateTo({
      url: 'pages/question/question',
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    if (getApp().data.sessionid) {
      var that = this
      wx.request({
        url: getApp().data.url + 'myfavorites/' + getApp().data.sessionid,
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          that.setData({ 'favorites': res.favorites })
        },
        fail: function (res) {
          wx.showModal({
            title: '错误',
            content: res.errMsg,
            showCancel: false,
            cancelText: '',
            cancelColor: '',
            confirmText: '确认',
            confirmColor: ''
          })
        },
        complete: function (res) { },
      })
    } else { 
      wx.showModal({
        title: '错误',
        content: '请先登录',
        showCancel: false,
        confirmText: '确定',
        success: function (res) {
          wx.switchTab({
            url: '/pages/profile/profile',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
         },
      })
      
    }
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