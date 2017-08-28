var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startMonth: '',
    year: '',
    communities: ['镜月湖社区','九里社区','高庙社区','渔场社区','黄庄社区'],
    cIndex: '',
    grades: ['足球班', '篮球班', '钢琴班', '二胡班', '王者班'],
    gIndex: '',
    levels: ['科员','副主任科员','主任科员','副处长','处长','副局长','局长'],
    lIndex: '',
    sexs: ['男', '女'],
    sIndex: '',
    familys: ['汉族', '壮族'],
    fIndex: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var cur_year = date.getFullYear();
    var cur_month = date.getMonth() + 1;
    if (parseInt(cur_month) < 10) {
      cur_month = '0' + cur_month;
    }
    this.setData({
      startMonth: cur_year + '-' + cur_month
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
      year: e.detail.value
    })
  },
  bindGradeChange: function (e) {
    this.setData({
      gIndex: e.detail.value
    })
  },
  bindCommunitieChange: function (e) {
    this.setData({
      cIndex: e.detail.value
    })
  }, 
  bindLevelChange: function(e) {
    this.setData({
      lIndex: e.detail.value
    })
  },
  bindSexChange: function (e) {
    this.setData({
      sIndex: e.detail.value
    })
  },
  bindFamilyChange: function (e) {
    this.setData({
      fIndex: e.detail.value
    })
  }
})