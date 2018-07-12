// pages/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'selectedlocations':[],
    'selectedsorting':{value:"0"},
    'selectedtype':-1,
    
    'sorting': [
      { name: '1', value: '按发布时间从新到旧', checked: 'true' },
      { name: '2', value: '按价格由低到高' },
      { name: '3', value: '按价格由高到低' }
    ],
    'types': [{
      "name": '家具家居',
      'index': 0,
      'icon_selected': '/img/categoryFurniture.png',
      'icon_unselected': '/img/categoryFurniture.png',
      'selected': false
    }, {
      "name": '电器数码',
      'index': 1,
      'icon_selected': '/img/categoryPC.png',
      'icon_unselected': '/img/categoryPC.png',
      'selected': false
    }, {
      "name": '服装饰品',
      'index': 2,
      'icon_selected': '/img/categoryCloth.png',
      'icon_unselected': '/img/categoryCloth.png',
      'selected': false
    }, {
      "name": '美妆护肤',
      'index': 3,
      'icon_selected': '/img/categoryCosm.png',
      'icon_unselected': '/img/categoryCosm.png',
      'selected': false
    }, {
      "name": '书籍课本',
      'index': 4,
      'icon_selected': '/img/categoryBook.png',
      'icon_unselected': '/img/categoryBook.png',
      'selected': false
    }, {
      "name": '其他分类',
      'index': 5,
      'icon_selected': '/img/categoryOther.png',
      'icon_unselected': '/img/categoryOther.png',
      'selected': false
    }]
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
  
  },
  type_click: function(e){
    for (var i = 0; i < 6; i++) {
      var param = {};
      var str = "types[" + i + "].selected"
      this.setData({ [str]: false })
    }
    var param = {};
    var str = "types[" + e.target.id + "].selected"
    this.setData({ [str]: true })
    this.selectedtype = e.target.id
  },
  location_click: function(e){
    this.selectedlocations = e.detail
  },
  sorting_click: function(e){
    this.selectedsorting = e.detail
  },
  search: function(e){
    getApp().data.tempdata = {
      'selectedlocations': this.selectedlocations,
      'selectedsorting': this.selectedsorting,
      'selectedtype': this.selectedtype,
    }
    wx.redirectTo({
      url: '/pages/postList/postList',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})