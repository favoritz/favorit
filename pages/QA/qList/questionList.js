// pages/QA/qList/questionList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
    postsList: [
      {
        "id": 1,
        "author": "Joseph",
        "title": "第一个标题",
        "content": "第一个内容",
        "create_at":"03-25-2018",
        "last_reply_at": "2天前",
        "reply_count":"0",
        "visit_count":"0",
        "tab":"ask"
      },
      {
        "id": 2,
        "author": "Joseph",
        "title": "第二个标题",
        "content": "第二个内容",
        "create_at": "xxx",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      },
      {
        "id": 3,
        "author": "Joseph",
        "title": "第三个标题",
        "content": "第三个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      },
      {
        "id": 4,
        "title": "第四个标题",
        "content": "第四个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      },
      {
        "id": 5,
        "title": "第五个标题",
        "content": "第五个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      },
      {
        "id": 6,
        "title": "第六个标题",
        "content": "第六个内容",
        "create_at": "yyy",
        "last_reply_at": "xxx",
        "reply_count": "0",
        "visit_count": "0",
        "tab": "ask"
      }
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