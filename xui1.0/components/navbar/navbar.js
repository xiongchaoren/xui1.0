const app = new getApp()
/*
  参数： 
*/
Component({

  properties: {
    tabs: {
      type: Array,
      value: [],
      observer() {
        this.init();
      }
    },
    content: {
      type: Array,
      value: [],
      observer(nv,ov) {
        // 新数据
        this.setNewData(nv)
        console.log("nv,ov=> ", nv, ov);
      }
    },
    tempname: {
      type: String,
      value: ''
    }
  },
 
  data: {
    _tabs: [],
    activeIndex: 0,
    scrollSet: {
      threshold: 100,
      left: 0,
    }
  },

  methods: {

    // 初始化
    init() {
      this.setData({
        _tabs: this.data.tabs
      });
      console.log("_tabs=>", this.data._tabs);
    },

    // 新数据设置
    setNewData(val) {
      let index = this.data.activeIndex;
      let json = {};
      json['_tabs[' + index + ']._content'] = val;
      this.setData(json);
      console.log("_content=> ", this.data._content);
    },

    // 切换tab事件
    _tabClick: function (e) {
      let index = Number(e.currentTarget.id);
      let ts = this.data._tabs[index]._content
      this.setData({
        activeIndex: index
      });
      // 返回当前选中tab对象
      let isRequest = false;
      if (this.data._tabs[index]._content) {
        isRequest = true;
      }
      this.triggerEvent('customevent', { obj: e, index: index, isRequest, ts });
      this.getNodeInfo(index);
    },

    // 横向滚动事件
    tabScrollEvent(e){
      console.log("e=> ",e);
      this.setData({ 'scrollSet.left': e.detail.scrollLeft});
    },

    // 获取节点信息
    getNodeInfo(index) {
      console.log("到底了--------------");

      var query = wx.createSelectorQuery().in(this)
      query.selectAll('.scroll-x-item').boundingClientRect()
      query.exec( (res)=>{
        let selectTab = '',curIndex = 0;
        for( let val of res[0]){
          if(val.id == index) {
            selectTab = val;
            curIndex = index-0;
            break;
          }
        }
        var that = this;
        console.log("selectTab=>", selectTab);

        // 边界值判断
        if (curIndex + 1 == res[0].length) {
          console.log("到达右右右右右右右右右右右右右边界值");
          return;
        }
        if (curIndex == 0) {
          console.log("到达左左左左左左左左左左左左左边界值");
          return;
        }

        wx.getSystemInfo({
          success(res2) {
            if ((res2.windowWidth - 100) < selectTab.left){
              console.log('该移动一个单位距离le ');
              that.setData({ 'scrollSet.left': that.data.scrollSet.left - 0 + 120});
            }
            if (selectTab.right < 100) {
              console.log('该移动一个单位距离le2222222222222222222 ');
              that.setData({ 'scrollSet.left': that.data.scrollSet.left -  120 });
            }
          }
        });

        console.log("到底了--------------");
      })
      

      
    }

  }

})