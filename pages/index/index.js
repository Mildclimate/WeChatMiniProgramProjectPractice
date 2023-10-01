import {
  formatNum,
  formatTime
} from '../../utils/common.js'
import {
  listNav,
  newsNav
} from "../../api/apis.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NavArr: [],
    NewsArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData();
    this.getNewsData()
  },
  //获取导航数据
  getNavData() {
    listNav().then(
      res => {
        console.log(res);
        this.setData({
          NavArr: res.data
        })
      }
    )
    //   wx.request({
    //     url: 'https://tea.qingnian8.com/nav/get',
    //     header:{
    //       "Content-Type":"application/json"
    //     },
    //     method:"POST",
    //     success:res=>{
    //       // {console.log(res);
    //       this.setData({
    //         NavArr:res.data.data
    //       })
    //       }

    //   })
  },
  //获取新闻列表
  getNewsData() {
    newsNav({
      limit: 3,
      hot: true
    }).then(res => {
      // console.log(res);
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
      })
      this.setData({
        NewsArr: res.data
      })
    })
    // wx.request({
    //   url: 'https://tea.qingnian8.com/news/get',
    //   header: {
    //     "ContentType": "application/json"
    //   },
    //   method: "POST",
    //   data: {
    //     limit: 3,

    //     hot: true
    // },
    // success: res => {
    //   console.log(res);
    //   res.data.data.forEach(item => {
    //     item.view_count = formatNum(item.view_count)
    //     item.publish_date = formatTime(item.publish_date, 5)
    //   });
    //   this.setData({
    //     NewsArr: res.data.data
    //     })
    //   }
    // })
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