// pages/home/home.js
Page({
  btn1: function(e){
    console.log(e.target.id)
    wx.navigateTo({
      url: e.target.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    carousselitems:[{
      'imgsrc':'/img/Costco.jpg',
      'linkpage':'a'
    },{
      'imgsrc':'/img/talk.jpg',
      'linkpage':'b'
    },{
      'imgsrc':'/img/banner.jpg',
      'linkpage':'c'
    }],
    posts: [
      /*{
        "id": 1,
        "author": "Joseph",
        "location": "市区附近",
        "price": "100",
        "priority": "置顶",
        "status": "1",
        "title": "二手iphone无锁",
        "content": "第一个内容",
        "create_at": "一个月前",
        "last_reply_at": "2天前",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask",
        'imgsrc':'/img/detailPreview.jpg'

      },
      {
        "id": 2,
        "author": "Joseph",
        "location": "市区附近",
        "price": "100",
        "priority": "置顶",
        "status": "1",
        "title": "第二个标题",
        "content": "第二个内容",
        "create_at": "xxx",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask",
        'imgsrc': '/img/detailPreview.jpg'
      },
      {
        "id": 3,
        "author": "Joseph",
        "location": "市区附近",
        "price": "100",
        "priority": "置顶",
        "status": "1",
        "title": "第三个标题",
        "content": "第三个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask",
        'imgsrc': '/img/detailPreview.jpg'
      },
      {
        "id": 4,
        "location": "1",
        "price": "100",
        "priority": "top",
        "status": "1",
        "title": "第四个标题",
        "content": "第四个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask",
        'imgsrc': '/img/detailPreview.jpg'
      },
      {
        "id": 5,
        "location": "1",
        "price": "100",
        "priority": "top",
        "status": "1",
        "title": "第五个标题",
        "content": "第五个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask",
        'imgsrc': '/img/detailPreview.jpg'
      },
      {
        "id": 6,
        "location": "1",
        "price": "100",
        "priority": "top",
        "status": "1",
        "title": "第六个标题",
        "content": "第六个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      }*/
    ],
    announcements:null
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
      url: getApp().data.url + 'carousselitems',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: getApp().data.url+'announcement/',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({'announcements':res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: getApp().data.url+'recentcount/'+this.data.posts.length,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        that.setData({'posts':res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  loadmore: function(e){
    var that = this
    /*
    wx.request({
      url: getApp().data.url + 'recent/' + this.data.posts.length,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.data.posts.push(res.data.posts)
        that.setData({ 'posts': that.data.posts }) },
      fail: function (res) {  },
      complete: function (res) {
         
      }
    })*/
  },
  showdetail:function(e){
    getApp().data.tempdata = e.currentTarget.id
    wx.navigateTo({
      url: '/pages/postDetail/postDetail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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