// pages/postDetail/postDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '话题详情',
    collectText: "收藏",
    detail: {},
    hidden: false,
    modalHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData(options.id);
  },

  // 获取数据
  fetchData: function (id) {
    var that = this;
    var ApiUrl = Api.topic + '/' + id + '?mdrender=false';
    that.setData({
      hidden: false
    });
    Api.fetchGet(ApiUrl, (err, res) => {
      res.data.create_at = util.getDateDiff(new Date(res.data.create_at));
      res.data.replies = res.data.replies.map(function (item) {
        item.create_at = util.getDateDiff(new Date(item.create_at));
        item.zanNum = item.ups.length;
        return item;
      })
      that.setData({ detail: res.data });
      setTimeout(function () {
        that.setData({ hidden: true });
      }, 300);
    })
  },

  // 收藏文章
  collect: function (e) {
    var that = this;
    var ApiUrl = Api.collect;
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    var id = e.currentTarget.id;
    if (!id) return;
    if (!accesstoken) {
      that.setData({ modalHidden: false });
      return;
    }

    Api.fetchPost(ApiUrl, { accesstoken: accesstoken, topic_id: id }, (err, res) => {
      if (res.success) {
        var detail = that.data.detail;
        detail.is_collect = true;
        that.setData({
          collectText: "取消收藏",
          detail: detail
        });
      }
    })
  },

  // 点赞
  reply: function (e) {
    console.log(e);
    var that = this;
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    var id = e.currentTarget.id;
    var index = e.currentTarget.dataset.index;
    var ApiUrl = Api.reply(id);
    if (!id) return;
    if (!accesstoken) {
      that.setData({ modalHidden: false });
      return;
    }

    Api.fetchPost(ApiUrl, { accesstoken: accesstoken }, (err, res) => {
      if (res.success) {
        var detail = that.data.detail;
        var replies = detail.replies[index];

        if (res.action === "up") {
          replies.zanNum = replies.zanNum + 1;
        } else {
          replies.zanNum = replies.zanNum - 1;
        }

        that.setData({ detail: detail });

      }
    })

  },

  // 关闭--模态弹窗
  cancelChange: function () {
    this.setData({ modalHidden: true });
  },
  // 确认--模态弹窗
  confirmChange: function () {
    this.setData({ modalHidden: true });
    wx.navigateTo({
      url: '/pages/login/login'
    });
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