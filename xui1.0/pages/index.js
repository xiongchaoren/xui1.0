// 页面DOM缩放,双手势触控控制缩放

// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 1
  },

  // 触摸移动
  tapMove(e) {

    if (e.changedTouches.length < 2) return;

    let [leftNode, rightNode] = e.changedTouches;
    // console.warn('tapMove=> ', leftNode.pageX, rightNode.pageX);

    let diff = Math.abs(leftNode.pageX - rightNode.pageX);

    if (!this.oldNode) {
      return this.oldNode = diff;
    }

    let newNode = diff;
    let oldNode = this.oldNode;

    let distance = newNode - oldNode;
    let scaleDistance = 9;    //若取值0.01，则scaleDistance=1,exponentiation=100
    let exponentiation = 10;    //幂
    let scale;
    let oldScale = this.data.scale;
    // console.log('tapMove=> ', newNode, oldNode, distance, Math.abs(distance), oldScale);
    this.oldNode = diff;

    if (distance > 0) {
      scale = (oldScale * exponentiation + scaleDistance) / exponentiation;
    } else {
      if (oldScale <= 1.1) {
        return;
      } else {
        scale = (oldScale * exponentiation - scaleDistance) / exponentiation;
      }
    }


    setTimeout((() => {
      this.setData({ scale });
    }).bind(this), 100);

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