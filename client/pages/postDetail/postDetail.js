// pages/postDetail/postDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    hiddenmodalput: true,
    title: 'iPhoneX',
=======
    title: 'title',
>>>>>>> 4aef5c39a66adb3104745c6d8c36b789b6198eb6
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

  showModel: function () {
    wx.showModal({
      title: '联系方式',
      content: '手机号：5147478201 \r\n Email：superduperextremelylongemail@gmail.com \r\n 微信号：489384htjBSDGA3098dfgh',
      showCancel: false,
      confirmText: '好的',
      confirmColor: '#0aacbb',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else {
          console.log('用户不知为何取消');
        }
      },
      fail: function () {
        console.log('接口调用失败');
      },
      complete: function () {
        console.log('接口调用结束')
      }
    })
  },

  //点击按钮显示指定的hiddenmodalput弹出框
  modalinput: function () {
    
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true
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