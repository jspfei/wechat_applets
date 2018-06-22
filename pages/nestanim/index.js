// pages/nestanim/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationNeedle:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animationNeedle = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: "87% 50%"
    });
    var e = this;
    e.animationNeedle.rotate(0).step();
    e.setData({
      animationNeedle: e.animationNeedle.export()
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
    this.drawCircle(20.0);

  },
  //绘画圆形进度条路径
  drawCircle: function (step) {
    // 使用 wx.createContext 获取绘图上下文 ctx  绘制背景圆环
    var ctx = wx.createCanvasContext('circle_bg1');
    ctx.setLineWidth(this.rpxToPx(16) / 2);
    ctx.setStrokeStyle('#ff5541');
    ctx.setLineCap('round')
    ctx.beginPath(); //开始一个新的路径
    //设置一个原点(x,y)，半径为r的圆的路径到当前路径 此处x=y=r
    ctx.arc(this.rpxToPx(218), this.rpxToPx(218), this.rpxToPx(184) - this.rpxToPx(16), -0.5 * Math.PI, -0.5 * Math.PI - step * Math.PI, true);
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },

  rpxToPx(rpx) {
    var systemInfo = wx.getSystemInfoSync();
    var px = rpx / 750 * systemInfo.windowWidth;
    return px;
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