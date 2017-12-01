const util = require("../../utils/utils.js");

Page({
	data:{
		url:'',
		movielist:[]

	},
	onLoad(params){
		const ToUrl = params.url;
		this.setData({
			url:ToUrl
		})
		
	},
	searchtext(e){
		const _this = this;
		if(!e.detail.value)return
			wx.setStorage({
				key:e.detail.value,
				data:e.detail.value
			})
			util.getSearchMovie({q:e.detail.value}).then((res)=>{
				_this.setData({
					movielist:res
				})
			})

	},
	ToMovieitem(e){
		const movieid = e.currentTarget.dataset.movieid;
		wx.navigateTo({
			url:'/page/movieitem/movieitem?id='+movieid
		})
	},
	cancel(e){
		//返回上一页
		wx.navigateBack({
			delta:1
		})
	}
})