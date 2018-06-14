//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      "分享好友",
      "弹出界面",
      "飞行动画"
    ],
    pageList:[
      "../share/index",
      "../pop/index",
      "../fly/index",
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    if (options.fromid ) {
      console.log(options.fromid);
    }
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    });
  },
  onClick:function(e){
    var that = this;
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: that.data.pageList[index],
    })
  }
  
})
