App({
	onLaunch(){
		console.log('onLaunch');
	},
	onLoad(){
		wx.login({
			 success: res => {
			 	const code = res.code;
			 	if (code) {
			 		console.log('获取用户登录凭证：'+code)
			 	}else{
			 		console.log('获取用户登录态失败：' + res.errMsg)
			 	}
        		// 发送 res.code 到后台换取 openId, sessionKey, unionId
     	 	}
		})
		wx.getUserInfo({
			success:(res)=>{
				if(res.authSetting['scope.record']){
					wx.getUserInfo({
						success:(res)=>{
							this.globalData.userInfo=res.userInfo
							if (this.userInfoReadyCallback) {
				                this.userInfoReadyCallback(res)
				            }
						}
					})
				}
			}
		})
	},
	globalData: {
	    userInfo: null
	 }
})