const canvasId = 'myCanvas';
const canvasId2 = 'myCanvas2';
const canvasId3 = 'myCanvas3';

Page({
  data: {
    x: 0,
    y: 0,
    img: 'https://res.eqianxian.com/wx_static/center/images/logo.png'
  },

  onReady: function () {
    // this.dotRun();

    this.context = wx.createCanvasContext(canvasId);

    // const grd = this.context.createLinearGradient(0, 0, 210, 0);
    // grd.addColorStop(0, 'red');
    // grd.addColorStop(1, 'white');

    // this.context.setFillStyle(grd);
    // this.context.fillRect(60, 60, 150, 150);
    // this.context.draw();

    this.context.save()
    this.context.setFillStyle('red')
    this.context.fillRect(10, 10, 150, 100)

    this.context.save()
    this.context.setFillStyle('blue')
    this.context.fillRect(30, 30, 150, 100)

    // restore to the previous saved state
    this.context.restore()
    this.context.fillRect(50, 50, 150, 100)

    this.context.draw()

  },

  start: function (e) {
    this.sDot = null;
    this.context.beginPath();
    let { x, y } = e.touches[0];
    this.setData({ x, y });
    this.drawLine(x, y);
  },
  move: function (e) {
    let { x, y } = e.touches[0];
    this.setData({ x, y });
    this.drawLine(x, y);
  },
  end: function (e) {

  },

  drawLine(x, y) {

    if (!this.sDot) {
      return this.sDot = { x, y };
    }

    this.context.setStrokeStyle('red');
    this.context.moveTo(this.sDot.x, this.sDot.y);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.context.draw(true, () => {
      this.sDot = { x, y };
    });

  },


  clip() {
    var that = this;
    const ctx = wx.createCanvasContext(canvasId3)

    wx.downloadFile({
      url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
      success: function (res) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(50, 50, 25, 0, 2 * Math.PI)
        ctx.clip()
        ctx.drawImage(res.tempFilePath, 25, 25)
        ctx.restore()
        ctx.draw()

        wx.canvasGetImageData({
          canvasId: canvasId3,
          x: 0,
          y: 0,
          width: 300,
          height: 300,
          success(res) {
            console.log('canvasGetImageData=> ', res);
            that.imgData = res.data;
          },
          fail(err) {
            console.error(err);
          }
        })

      }
    })
  },

  // 获取图像数据
  getImgData() {
    var that = this;
    wx.canvasGetImageData({
      canvasId: canvasId,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      success(res) {
        console.log(res);
        // console.log(res.width) // 100
        // console.log(res.height) // 100
        // console.log(res.data instanceof Uint8ClampedArray) // true
        // console.log(res.data.length) // 100 * 100 * 4
        that.imgData = res.data;
      },
      fail(err) {
        console.error(err);
      }
    })
  },

  // 将像素数据绘制到画布上
  putImgData() {
    console.log(this.imgData);
    wx.canvasPutImageData({
      canvasId: canvasId2,
      x: 0,
      y: 0,
      width: 300,
      data: this.imgData,
      success(res) {
        console.log(res);
      }
    })
  },

  // 导出
  educe() {
    let obj = {
      canvasId: canvasId,
      success: function (res) {
        // console.log(res)

        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success() {
            wx.showToast({
              title: '已保存到相册中，欢迎分享',
              icon: 'success',
              duration: 3000
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '用户取消保存图片，',
              icon: 'success',
              duration: 3000
            })
          }
        })

      }
    }
    wx.canvasToTempFilePath(obj)
  }

})
