// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'state':0,
    'profile': null,
    'tempdata':null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  login: function(e){
    var that = this
    wx.login({
      success:function(res){
        if(res.code){
          console.log(res.code)
          wx.request({
            url: getApp().data.url+'login',
            data: {"code":res.code},
            header: {},
            method: 'POST',
            success: function(res) {
              if (res.data.sessionid) {
                getApp().data.sessionid = res.data.sessionid
                getApp().data.profile = res.data.userinfo
                that.setData({profile:getApp().data.profile})
                that.setData({'state':1})
              }
            },
            fail: function(res) {
              getApp().data.sessionid = null
              that.setData({'state':0})
            },
            complete: function(res) {
              
            },
          })
        }
        else{
          console.log('登录失败！' + res.errMsg)  
        }
      }
    })
    
  },
  logout:function(e){
    getApp().data.sessionid = null
    getApp().data.profile = null
    this.setData({'profile':null,'state':0})
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
    console.log(getApp().data.sessionid)
    this.setData({ 'profile': getApp().data.profile })
    if (getApp().data.sessionid) {
      this.setData({ 'state': 1 })
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