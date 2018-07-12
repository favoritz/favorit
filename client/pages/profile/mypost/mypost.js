// pages/profile/mypost/mypost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: [
    ],
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
    var that = this
    wx.request({
      url: getApp().data.url + 'myposts/0',
      data: '',
      header: { 'token': getApp().data.sessionid },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({ posts: res.data })
      },
      fail: function (res) {
        wx.showModal({
          title: '错误',
          content: '网络链接失败 请检查网络',
          showCancel: false,
          cancelText: '',
          cancelColor: '',
          confirmText: '确认',
          confirmColor: ''
        })

      },
      complete: function (res) { 
        console.log(res)
      },
    })
  },
  loadmore: function (e) {
    var that = this
    console.log(this.data.posts.length)
    wx.request({

      url: getApp().data.url + 'myposts/' + this.data.posts.length,
      data: '',
      header: { 'token': getApp().data.sessionid },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        for (var i = 0; i < res.data.length; i++) {
          that.data.posts.push(res.data[i])
        }
        that.setData({ 'posts': that.data.posts })
        console.log(that.data.posts)
      },

      fail: function (res) { },
      complete: function (res) {

      }
    })
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