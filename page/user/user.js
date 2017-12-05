const app = getApp();
Page({
	data:{
		nickname:'',
		title:'',
		userinfo:{},
		hasUserInfo:false,
		canIUse:wx.canIUse('button.open-type.getUserInfo'),
		animationData:{},
		status:true,
	},
	onReady(){
		wx.setNavigationBarTitle({ title: '我的信息' })
	},
	onLoad(){
		console.log(app.globalData.userinfo)
		var animation = wx.createAnimation({//动画
	      
	      duration: 500,//动画持续时间
	      timingFunction: 'linear',//动画的效果 动画从头到尾的速度是相同的
	    })
	    

	    this.animation = animation
		if (app.globalData.userinfo) {
			this.setData({
				userinfo:app.globalData.userInfo,
				animationData:animation
			})
		}
  	},
  	checkin(e){
  		 this.animation.scale3d(1,2,2).step()
  		 this.data.status = true;
    	 this.setData({animationData: this.animation.export(),status:true})
  	}
})