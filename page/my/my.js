const util = require("../../utils/utils.js");
const app = getApp();
Page({
	data:{
		userinfo:[],
		userInfo:{}
	},
	onLoad(){
		if (app.globalData.userInfo) {
	      this.setData({
	        userInfo: app.globalData.userInfo,
	        hasUserInfo: true
	      })
	    } else {
	      // 在没有 open-type=getUserInfo 版本的兼容处理
	      wx.getUserInfo({
	        success: res => {
	          app.globalData.userInfo = res.userInfo
	          this.setData({
	            userInfo: res.userInfo,
	            hasUserInfo: true
	          })
	        }
	      })
	    }
		// const _this= this;
		// util.getUserInfo({}).then((res)=>{
		// 	console.log(res);
		// 	_this.setData({
		// 		userinfo:res.data
		// 	})
		// })
	}
})