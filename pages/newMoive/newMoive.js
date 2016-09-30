const app = getApp();
const API_URL = 'https://api.douban.com/v2/movie/us_box';

Page({
    data:{
        newMovie:[],
        hidden:false
    },
    onLoad:function(){
        wx.request({
        url:API_URL,
        header: {
            'Content-Type': 'application/json'
        },
        success:function(data) {
           console.log(data);
        }
    })
    }
})