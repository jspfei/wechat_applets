// pages/movey/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveYAnim: {}, 
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
    this.showFingerGuide();
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
  
  },
  //有可提现金额 弹出提示
  showFingerGuide: function () {
    this.moveYAnimData = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
      success: function (res) {
        console.log("res");
      }
    });
    this.moveYAni(); 
  
  },
  //白色向上图片上下移动动画
  moveYAni: function () {
    var that = this;
    var dotAnFunLeft = setInterval(function () {
      that.moveYAnimData.translateY(10).step()
      that.setData({
        moveYAnim: that.moveYAnimData.export()
      });

    }.bind(that), 200);
    var dotAnFunRight = setInterval(function () {
      that.moveYAnimData.translateY(-50).step()
      that.setData({
        moveYAnim: that.moveYAnimData.export()
      });

    }.bind(that), 500);

  },
})