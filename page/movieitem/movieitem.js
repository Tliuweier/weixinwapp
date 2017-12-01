const util = require('../../utils/utils.js');
Page({
	data:{
		movieitem:[]
	},
	onLoad(params){
		const movieid = params.id;
		const _this = this;
		util.getMovieItem({},movieid).then((res)=>{
			_this.setData({
				movieitem:res
			})
		})
	}
	
})