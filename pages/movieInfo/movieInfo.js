const API_URL = 'https://api.douban.com/v2/movie/subject/';
const app = getApp();

Page({
    data:{
        hidden:true,
        movieInfo:{}
    },
    onLoad (params) {
        wx.request({
            url:API_URL+params.id,
            header: {
                'Content-Type': 'application/json'
            },
            success:function(data) {
                console.log(data);
            }
        })
    }
})