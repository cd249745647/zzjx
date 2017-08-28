var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kpied: false
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
    return {
      title: '欢迎进入中直教学',
      path: 'pages/index/index',
      success: function (res) {

      }
    }
  },
  bindDateChange: function(e){

  },
  bindGradeChange: function (e) {

  },
  bindCommunitieChange: function (e) {

  },
  kpi: function(e){
    if(!this.data.kpied){
      var that = this;
      var index = e.currentTarget.dataset.index;
      var title = '';
      switch(index){
        case '1': title = '您是否觉得很好?';break;
        case '2': title = '您是否觉得好?'; break;
        case '3': title = '您是否觉得一般?'; break;
      }
      wx.showModal({
        title: '提示',
        content: title,
        success: function (res) {
          if (res.confirm) {
            that.setData({
              kpied: true
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  }
})