// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'images':[],
    'locations': [{
      'index': 0,
      'name': 'Laval',
      'icon_selected': '/img/categoryBook.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 1,
      'name': '南岸',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 2,
      'name': '西岛',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 3,
      'name': 'Saint-Laurent附近',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 4,
      'name': '市区附近',
      'icon_selected': '/img/location.png',
      'icon_unselected': '/img/location2.png',
      'selected': false
    }, {
      'index': 5,
      'name': 'Verdun/Lasalle附近',
      'icon_selected': '/img/location.png',
      'icon_unselected': '/img/location2.png',
      'selected': false
    }, {
      'index': 6,
      'name': 'CDN/NDG附近',
      'icon_selected': '/img/location.png',
      'icon_unselected': '/img/location2.png',
      'selected': false
    }, {
      'index': 7,
      'name': '奥林匹克附近以及东',
      'icon_selected': '/img/location.png',
      'icon_unselected': '/img/location2.png',
      'selected': false
    }],
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
    }],
    'location': [
      { 'index': '0', 'value': 'Laval' },  
      { 'index': '1', 'value': '南岸' },
      { 'index': '2', 'value': '西岛' },
      { 'index': '3', 'value': 'Saint-Laurent 附近' },
      { 'index': '4', 'value': '市区附近' },
      { 'index': '5', 'value': 'Verdun/Lasalle 附近' },
      { 'index': '6', 'value': 'CDN/NDG 附近' },
      { 'index': '7', 'value': '奥林匹克 附近及以东' }
    ]  
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  type_click: function(e){
    for (var i = 0; i < 8; i++) {
      var param = {};
      var str = "types[" + i + "].selected"
      this.setData({ [str]: false })
    }
    var param = {};
    var str = "types[" + e.target.id + "].selected"
    this.setData({ [str]: true })
  },
  location_click: function(e){
    for (var i = 0; i < 8; i++) {
      var param = {};
      var str = "locations[" + i + "].selected"
      this.setData({ [str]: false })
    }
    var param = {};
    var str = "locations[" + e.target.id + "].selected"
    this.setData({ [str]: true })
  },
  // 地点选择,获取用户选择的单选框的值  
  radioChange: function (e) {
    this.setData({
      value: e.detail.value
    })
    console.log(e.detail.value)
  },  

  addimage_click: function(e){
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        console.log(res)
        this.setData(images,res.tempFilePaths)
      }
    })
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
  
  }
})