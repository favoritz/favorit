// pages/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'sortings':[{
      'index': 0,
      'name': '按发布时间排序',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': true
    }, {
      'index': 1,
      'name': '按价格从低到高',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    },{
      'index': 2,
      'name': '按价格从高到低',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }],
    'locations':[{
      'index':0,
      'name':'Laval',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 1,
      'name': '南岸',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    },{
      'index':2,
      'name':'西岛',
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
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 5,
      'name': 'Verdun/Lasalle附近',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 6,
      'name': 'CDN/NDG附近',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      'index': 7,
      'name': '奥林匹克附近以及东',
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }],
    'types':[{
      "name":'家具家居',
      'index':0,
      'icon_selected':'/img/1.png',
      'icon_unselected':'/img/2.png',
      'selected':false
    }, {
      "name": '电器数码',
      'index': 1,
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    },{
      "name":'服装饰品',
      'index': 2,
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      "name": '美妆护肤',
      'index':3,
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      "name": '书籍课本',
      'index': 4,
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
      'selected': false
    }, {
      "name": '其他分类',
      'index': 5,
      'icon_selected': '/img/1.png',
      'icon_unselected': '/img/2.png',
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
    var param = {};
    var str = "types[" + e.target.id + "].selected"
    this.setData({[str] : !this.data.types[e.target.id].selected})
  },
  location_click: function(e){
    var param = {};
    var str = "locations[" + e.target.id + "].selected"
    this.setData({ [str]: !this.data.locations[e.target.id].selected })
  },
  sorting_click: function(e){
    for(var i = 0; i<3; i++){
      var param = {};
      var str = "sortings[" + i + "].selected"
      this.setData({ [str]: false })
    }
    var param = {};
    var str = "sortings[" + e.target.id + "].selected"
    this.setData({ [str]: true })
  },
  search_click: function(e){
    console.log('do something')
  }
})