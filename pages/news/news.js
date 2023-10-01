import {
  newsNav
} from "../../api/apis"
import {
  formatTime,
  formatNum
} from "../../utils/common.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNews()
    loading:false
    isData:false
  },

  //获取新闻列表
  getNews(size) {
    this.setData({loading:true})
    newsNav({
      limit: 8,
      size: size
    }).then(res => {
      res.data.forEach(item => {
        item.publish_date = formatTime(item.publish_date, 5)
        item.view_count = formatNum(item.view_count)
      })
      let olddata = this.data.newsArr
      let newdata = [...olddata,...res.data]
      console.log(res);
      wx.stopPullDownRefresh();
      this.setData({
        newsArr: newdata,
        loading:false
      })
      if(this.data.newsArr.length == res.total ){
        this.setData(
          {isData:true}
        )
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      newsArr:[],
      loading:false,
      isData:false
    })
    this.getNews()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isData) return;
    this.getNews(this.data.newsArr.length)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})