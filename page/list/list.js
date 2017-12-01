
const app = getApp();

Page({
	data:{
		message:'Hello 小程序',
		list:[],
		title:''
	},
	 onLoad(){
	 	// this.setData({
	 	// 	message:Date.now()
	 	// })
	 	//获取一个API中的数据，不要使用AJAX api 因为AJAX的API是BOM
	 	//使用微信官方Api
	 	const _this = this;
	 	wx.request({
		  url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
		  data: {
		    
		  },
		  header: {
		      'content-type': 'json' // 默认值
		  },
		  success: function(res) {
		  	_this.setData({
		  		list:res.data.subjects
		  	})
		    console.log(res.data)
		  }
		})


	 },
	 onReady(){
	 	wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
	 }
})