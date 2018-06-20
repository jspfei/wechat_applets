// pages/fly/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showGoldAnimPoint: false,//金币动画是否显示
    showGoldAnimPoint1:true,
    left:200,
    top:550,
    goldAnims:[]
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
  
  },
  onClick:function(event){
    var id = event.currentTarget.id; 
    this.click = true;
    //this.gold_fly(id);
    this.gold_fly2();
  },
  gold_fly2:function(){
    this.setData({
      left:200,
      top:550,
      rotate:0, 
      showGoldAnimPoint1:true
    })
    var self = this;
    
    self.animation5=  self.setGoldToUserGoldIconAim2(600, 0, "30rpx", "95rpx",this); 
    self.animation6 = self.setGoldToUserGoldIconAim2(600, 90, "30rpx", "95rpx", this);
    self.animation7 = self.setGoldToUserGoldIconAim2(600, 180, "30rpx", "95rpx", this);
    self.animation8 = self.setGoldToUserGoldIconAim2(600, 270, "30rpx", "95rpx", this);
    self.animation9 = self.setGoldToUserGoldIconAim2(600, 360, "30rpx", "95rpx", this);
    self.animation10 = self.setGoldToUserGoldIconAim2(600, 450, "30rpx", "95rpx", this);
    self.animation11 = self.setGoldToUserGoldIconAim2(600,540, "30rpx", "95rpx", this);
    self.animation12 = self.setGoldToUserGoldIconAim2(600, 630, "30rpx", "95rpx", this);
    self.animation13 = self.setGoldToUserGoldIconAim2(600, 720, "30rpx", "95rpx", this);
    self.animation14 = self.setGoldToUserGoldIconAim2(600, 810, "30rpx", "95rpx", this);
    self.setData({
      
      animationData5: self.animation5.export(), 
      animationData6: self.animation6.export(), 
      animationData7: self.animation7.export(), 
      animationData8: self.animation8.export(), 
      animationData9: self.animation9.export(), 
      animationData10: self.animation10.export(), 
      animationData11: self.animation11.export(), 
      animationData12: self.animation12.export(), 
      animationData13: self.animation13.export(), 
      animationData14: self.animation14.export(), 
    })

    setTimeout(function(){
      if (this.click ){
        this.click = false;
        this.gold_fly2();
      } 
    }.bind(this),3000)
  },
  //设置从点击红包位置飞到 用户信息金币位置
  setGoldToUserGoldIconAim2: function (duration, delay, top1, left1, self) {
    var anim = self.createFlyAnim(duration, delay);
    anim.rotateY(-360).step();
    anim.rotateY(180).top(top1).left(left1).step().step({ duration: 1000 })
    return anim;

  },
  //创建动画界面
  createFlyAnim: function (duration, delay) {
    var animation = wx.createAnimation({
      duration: duration,
      delay: delay,
      timingFunction: 'linear ',
    })
    return animation;
  },
  //设置金币在点击领取红包位置动画
  setGoldInClickPositionAnim: function (duration, delay, top1, left1, self) {
    var anim = self.createFlyAnim(duration, delay);
    anim.opacity(0).top(top1 + 10).left(left1 + 10).step();
    return anim;
  },
  //设置从点击红包位置飞到 用户信息金币位置
  setGoldToUserGoldIconAim: function (duration, delay, top1, left1, self) {
    var anim = self.createFlyAnim(duration, delay);
    anim.opacity(1).step().top(top1).left(left1).step().opacity(0).step()
    return anim;

  },
  //获得金币，播放动画
  gold_fly: function (id) {
    var top, left, scrollTop
    var self = this
    var query = wx.createSelectorQuery()
    query.select('#' + id).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res[1].scrollTop)
      top = res[0].top;
      left = res[0].left + 20
      scrollTop = res[1].scrollTop

      self.animation1 = self.setGoldInClickPositionAnim(0, 0, top + scrollTop, left, self);
      self.animation2 = self.setGoldInClickPositionAnim(0, 0, top + scrollTop, left, self);
      self.animation3 = self.setGoldInClickPositionAnim(0, 0, top + scrollTop, left, self);
      self.animation4 = self.setGoldInClickPositionAnim(0, 0, top + scrollTop, left, self);
      //设置图片在点击位置出现
      self.setData({
        showGoldAnimPoint: true,
        animationData1: self.animation1.export(),
        animationData2: self.animation2.export(),
        animationData3: self.animation3.export(),
        animationData4: self.animation4.export(),
      });
      //播放图片飞行到用户信息金币位置动画
      // 95rpx 30rpx 是 用户信息界面金币的位置
      setTimeout(function () {
        self.animation1 = self.setGoldToUserGoldIconAim(300, 0, "95rpx", "30rpx", self);
        self.animation2 = self.setGoldToUserGoldIconAim(300, 100, "95rpx", "30rpx", self);
        self.animation3 = self.setGoldToUserGoldIconAim(300, 200, "95rpx", "30rpx", self);
        self.animation4 = self.setGoldToUserGoldIconAim(300, 300, "95rpx", "30rpx", self);
        self.setData({
          animationData1: self.animation1.export(),
          animationData2: self.animation2.export(),
          animationData3: self.animation3.export(),
          animationData4: self.animation4.export()
        })

        //金币飞到位置以后隐藏（防止遮挡返回按钮点击事件）
        setTimeout(function () {
          self.setData({
            showGoldAnimPoint: false,
          })
        }.bind(this), 1500);
      }.bind(this), 300);



    });

  },
})