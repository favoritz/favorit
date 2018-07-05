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
    
    this.setData({ 'profile': getApp().data.profile })
    if(getApp().data.sessionid){
      this.setData({'state':1})
    }
  },
  
  login: function(e){
    var that = this
    wx.login({
      success:function(res){
        if(res.code){
          wx.request({
            url: getApp().data.url+'login',
            data: {},
            header: {'code':res.code},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              if (res.data.sessionid) {
                getApp().data.sessionid = res.data.sessionid
                getApp().data.profile = res.data.userinfo
                that.setData({'state':1})
              }
            },
            fail: function(res) {
              getApp().data.sessionid = 1
              that.setData({'state':1})
            },
            complete: function(res) {},
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