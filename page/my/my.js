const util = require("../../utils/utils.js");
Page({
	data:{
		userinfo:[]
	},
	onLoad(){
		const _this= this;
		util.getUserInfo({}).then((res)=>{
			console.log(res);
			_this.setData({
				userinfo:res.data
			})
		})
	}
})