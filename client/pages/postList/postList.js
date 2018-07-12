// pages/postList/postList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      imgsrc:'img',
      id:'id',
      title:'title',
      create_at:'createtime',
      location:'location',
      price:'price'
    }]
  },

  todetail:function(e){

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
    console.log(getApp().data.tempdata)
    wx.request({
      url: getApp().data.url+'filter',
      data: getApp().data.tempdata,
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        this.setData({list:res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  collect:function(e){
    console.log('collected')
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