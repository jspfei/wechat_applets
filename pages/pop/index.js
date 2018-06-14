// pages/pop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowRuleScene:0
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
  onClick:function(){
     this.setData({
       isShowRuleScene:1
     })
  },
  closeRuleSceneEvent:function(){
    this.setData({
      isShowRuleScene: 0
    })
  }
})