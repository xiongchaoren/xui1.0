// pages/tab2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: {
      items: [
        {
          name: '选项一'
        }, {
          name: '选项二'
        }, {
          name: '选项三'
        }, {
          name: '选项四'
        }
      ],
      activeIndex: 0
    },
    tabs2: {
      items: [
        {
          name: '选项一'
        }, {
          name: '选项二1'
        }, {
          name: '选项三'
        }, {
          name: '选项四'
        }, {
          name: '选项二'
        }, {
          name: '选项三'
        }, {
          name: '选项四'
        }
      ],
      activeIndex: 0
    }
  },

  toggleTab(e){
    this.setData({ 'tabs.activeIndex': e.currentTarget.dataset.index });
  },

  toggleTab2(e) {
    this.setData({ 'tabs2.activeIndex': e.currentTarget.dataset.index });
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