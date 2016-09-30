/*
*豆瓣电影Top250
*API=https://api.douban.com/v2/movie/top250
*/
const API_URL = 'https://api.douban.com/v2/movie/top250';
const app = getApp();

Page({
  data: {
    movieList:[],
    hidden:false
  },
  handleGetOneMovieInfo:function(id){
    console.log(id)
  },
  onLoad:function() {
    let _this = this;
    wx.request({
      url:API_URL,
      header: {
        'Content-Type': 'application/json'
      },
      success:function(data) {
        _this.setData({
          movieList:data.data.subjects,
          hidden:true
        })
      }
    })
  }
})
