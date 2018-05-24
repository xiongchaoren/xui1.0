// pages/tab/index.js
// var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: [{
      name: "选项一"
    }, {
      name: "选项二",
    }, {
      name: "选项三",
    }, {
      name: "选项四",
    }, {
      name: "选项五",
    }, {
      name: "选项六",
    }, {
      name: "选项七",
    }, {
      name: "选项八",
    }, {
      name: "选项九",
    }, {
      name: "选项十",
    }, {
      name: "选项十一",
    }, {
      name: "选项十二",
    }, {
      name: "选项十三",
    }, {
      name: "选项十四",
    }],
    ts: [],
    src: '/templates/test/test.wxml'
  },
  // 选项卡点击事件回调
  pageEventListener1(options) {
    console.log('options=> ', options.detail);
    this.index = options.detail.index;
    this.setData({
      ts: options.detail.ts
    });
    if (!options.detail.isRequest) {
      console.log('doAjax success');
      this.doAjax(options.detail);
    }
  },
  onLoad() {

  },
  doAjax() {
    setTimeout(() => {
      this.getMockData()
    }, 500);
  },
  // 模拟数据
  getMockData(k = false) {
    let index = this.index;
    console.log("this.index=> ", this.index);
    let mockData = [];
    if (index == 0) {
      mockData = [
        {
          name: "选项一的值"
        }
      ]
    } else if (index == 1) {
      mockData = [
        {
          name: "选项二的值"
        }
      ]
    } else if (index == 2) {
      mockData = [
        {
          name: "选项三的值"
        }, {
          name: "选项三的值"
        }, {
          name: "选项三的值"
        }, {
          name: "选项三的值"
        }, {
          name: "选项三的值"
        }
      ];
    }

    if (k) {
      var data = this.data.ts;
      console.log("data=>>> ", data);
      mockData = [...mockData, ...data]
    }

    this.setData({
      ts: mockData
    });
  },
  onReachBottom: function () {
    console.log('触底了!!!');
    this.getMockData(true);
  }

});