// pages/class/class.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    scrollTop:'',
    indexs:0,
    statusBarHeight: app.globalData.statusBarHeight,
    navs:[{
      id:0,
      name:"标签11"
    }, {
        id: 0,
        name: "标签13"
      }, {
        id: 0,
        name: "标签14"
      }, {
        id: 0,
        name: "标签15"
      }, {
        id: 0,
        name: "标签16"
      }, {
        id: 0,
        name: "标签17"
      }, {
        id: 0,
        name: "标签18"
      }, {
        id: 0,
        name: "标签19"
      }, {
        id: 0,
        name: "标签20"
      },{
        id: 0,
        name: "标签21"
      }, {
        id: 0,
        name: "标签22"
      }]
  },
  playNav(event) {
    let id = event.currentTarget.dataset.index;
    this.setData({
      scrollTop:id*60,
      indexs:id
    })
    console.log(id, this.data.scrollTop)
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