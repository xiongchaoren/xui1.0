// pages/toast/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toast:{}
  },

  // 只显示文字
  showToast(){
    const toast = {
      show: true,
      title: '加载中...'
    };

    const nextTimer = setTimeout(()=>{
      this.hideToast(nextTimer);
    }, toast.timer || 3000);
    
    this.setData({ toast });
  },

  // 显示文字图片
  showImgToast() {
    const toast = {
      show: true,
      image: 'https://b.yzcdn.cn/v2/image/dashboard/secured_transaction/suc_green@2x.png',
      title: '加载中...'
    };

    const nextTimer = setTimeout(() => {
      this.hideToast(nextTimer);
    }, toast.timer || 3000);

    this.setData({ toast });
  },

  // 显示文字图标
  showIconToast() {
    const toast = {
      show: true,
      icon: 'loading',
      title: '加载中...'
    };

    const nextTimer = setTimeout(() => {
      this.hideToast(nextTimer);
    }, toast.timer || 3000);

    this.setData({ toast });
  },

  // 显示文字图标
  showIconToast() {
    const toast = {
      show: true,
      icon: 'loading',
      title: '加载中...'
    };

    const nextTimer = setTimeout(() => {
      this.hideToast(nextTimer);
    }, toast.timer || 3000);

    this.setData({ toast });
  },

  // 显示文字字体图标
  showFontIconToast() {
    const toast = {
      show: true,
      icon: 'success',
      title: '加载中...'
    };

    const nextTimer = setTimeout(() => {
      this.hideToast(nextTimer);
    }, toast.timer || 3000);

    this.setData({ toast });
  },

  hideToast(nextTimer){
    clearTimeout(nextTimer);
    this.setData({ 'toast.show': false });
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
  
  }
})