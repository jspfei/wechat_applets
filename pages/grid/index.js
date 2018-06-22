// pages/grid/index.js
var Tile = require('./tile.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     grids:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       grids:this.init(4)
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     
  },
  init:function(size){

    var cells = [];

    for (var x = 0; x < size; x++) {
      var row = cells[x] = [];

      for (var y = 0; y < size; y++) {
        var cell = {x:x,y:y}
        var tile = new Tile(cell, y);
        row.push(tile);
      }
    }
    return cells;
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