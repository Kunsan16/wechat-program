// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideText: true,
    hideClass: 'up'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let that = this
     const id = options.id;
     console.log(id)
      wx.request({
        url: 'https://m.maoyan.com/movie/' + id + '.json',
        
        success(res){
          let detail = res.data.data.MovieDetailModel;
          console.log("电影详情" + detail)
          detail.dra = detail.dra.replace(/(<p>)|(<\/p>)/g, '');
            that.setData({
              detail:detail
            })
        }
        
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页',
    })
  },



  toggleText() {
    let hideText = this.data.hideText,
      hideClass = this.data.hideClass == 'up' ? 'down' : 'up';
    this.setData({
      hideText: !hideText,
      hideClass: hideClass
    })
  }
})