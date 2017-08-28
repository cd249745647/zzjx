var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startYear: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      startYear: new Date().getFullYear()
    })
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
    return {
      title: '欢迎进入中直教学',
      path: 'pages/index/index',
      success: function (res) {

      }
    }
  },
  bindDateChange: function(e){
    this.setData({
      date: e.detail.value
    })
  },
  apply: function(){
    wx.navigateTo({
      url: '/pages/apply/apply'
    })
  },
  notice: function(e){
    wx.navigateTo({
      url: '/pages/notice/notice?index='+e.currentTarget.dataset.id
    })
  },
  vote: function () {
    wx.navigateTo({
      url: '/pages/vote/vote'
    })
  },
  kpi: function () {
    wx.navigateTo({
      url: '/pages/kpi/kpi'
    })
  }
})