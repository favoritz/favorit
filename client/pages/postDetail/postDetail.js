// pages/postDetail/postDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'title',
    'carousselitems': [{
      'imgsrc': '/img/Costco.jpg',
    }, {
      'imgsrc': '/img/talk.jpg',
    }, {
      'imgsrc': '/img/banner.jpg'
    }],
    create_at: 'create time',
    location: 'location',
    content: 'content。',
    userIcon: 'usericon',
    userID: 0,
    username: 'username',
    'type': '#出二手#',
    userPostCount: 'upostcount',
    userDoneCount: 'udonecount',
    readCount:'readcount',
    price:'price',
    top:true,
    good:true,
    'replies': [{
      'index':0,
      'id':0,
      'avatar': '/img/avatar.png',
      'username':'草莓',
      'create_at':'2017-12-24',
      'content': '想要，可以便宜一点吗？大概减个400刀就行。'
    },
      {
        'index': 1,
        'id': 1,
        'avatar': '/img/avatar.png',
        'username': '南瓜',
        'create_at': '2017-12-24',
        'content': '市中心好远啊能不能给我送过来，我在西岛，只有周一早上6点以前和周三晚上十点以后有空'
      }],
  },

  collect: function(e){
    console.log(e)
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
    console.log('postdetail:' + getApp().data.tempdata)
    wx.request({
      url: getApp().data.url + 'postdetail/' + getApp().data.tempdata,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        that.setData({ 
          title:res.data.title
         })
      },
      fail: function (res) { },
      complete: function (res) { },
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