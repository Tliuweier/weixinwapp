const app = getApp();
Page({
	data:{
		nickname:'',
		title:'',
		userinfo:{},
		hasUserInfo:false,
		canIUse:wx.canIUse('button.open-type.getUserInfo')
	},
	onReady(){
		wx.setNavigationBarTitle({ title: '我的信息' })
	},
	onLoad(){
		console.log(app.globalData.userinfo)
		if (app.globalData.userinfo) {
			this.setData({
				userinfo:app.globalData.userInfo
			})
		}
  	},
  	getUserInfo(e){
  		console.log(e)
  		app.globalData.getUserInfo = e.detail.userInfo
  		this.setData({
	      userInfo: e.detail.userInfo,
	      hasUserInfo: true
	    })
	}
})