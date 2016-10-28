var Constant = require('../../utils/constant');
var dateFormat = require('../../utils/util');

function formatDate(date) {
    return date.split('T')[0];
}

Page({
    data: {
        items: [],
    },

    onLoad: function () {
        var that = this;
        // wx.showToast({
        //     icon: 'loading',
        //     duration: 2000
        // });
        wx.request({
            url: Constant.GET_URL,
            success: function (res) {
                console.log(res);
                if (res.data.results == null || res.data.results.length <= 0) {
                    console.error(Constant.ERROR_DATA_IS_NULL);
                    return;
                }
                var temp = [];
                var results = res.data.results;
                for (var i = 0; i < res.data.results.length; i++) {
                    var images = results[i].images;
                    temp.push({
                        src:  images == null ? "http://img1.3lian.com/2015/w7/85/d/101.jpg" : images[0],
                        type: results[i]['type'],
                        url: results[i]['url'],
                        desc: results[i]['desc'],
                        time: formatDate(results[i]['publishedAt']),
                        who: results[i]['who'] == null ? "anonymity" : results[i]['who']
                    });
                }
                console.log(temp);
                that.setData({
                    items: temp
                });
                // wx.hideToast();
                that.update();
            }
        });
    },

    loadedimage: function () {
        console.log("图片加载完成");
    },

    loaderror: function (res) {
        console.log("图片加载失败", res.detail);
    },

    onItemClick: function (event) {

    },

    scrollToTop: function () {
        console.log("To top");
    },

    scrollToBottom: function () {
        console.log("To bottom");
    },

    scroll:function (ev) {
        console.log("scroll >> ", ev);
    }
});
