const util = require('../../utils/utils.js');
Page({
	data:{
		movie_subjects:[],
		url:'',
		count:11,
		start:0
	},
	onLoad(params){
		console.log(params);
		const _this = this;
		util.getmovieList({start:this.data.start,count:this.data.count},'',params.url).then((res)=>{
			_this.setData({
				movie_subjects:util.movieDataFactory(res),
				url:params.url,
				start:_this.data.start+_this.data.count
			})
		})
	},
	ToMovieitem(e){
		const movieid = e.currentTarget.dataset.movieid;
		wx.navigateTo({
			url:'/page/movieitem/movieitem?id='+movieid
		})
	},
	onPullDownRefresh(){
		console.log("下拉加载...");
		console.log(this.data.url);
		if (this.data.url==='') {
			return;
		}
		const _this =this;
		wx.showNavigationBarLoading();
		util.getmovieList({start:0,count:this.data.count},'',this.data.url).then((res)=>{
			_this.setData({
				movie_subjects:util.movieDataFactory(res),
				start:_this.data.count
				
			})
		});
		wx.stopPullDownRefresh();
      	wx.hideNavigationBarLoading();
	},
	onReachBottom(){
		console.log("上拉加载....");
		console.log(this.data.url);
		const _this = this;
		wx.showNavigationBarLoading();
		util.getmovieList({start:this.data.start,count:this.data.count},'',this.data.url).then((res)=>{
			const oldmovielist = _this.data.movie_subjects;
			const newmovielist = util.movieDataFactory(res);
			console.log(oldmovielist);
			console.log(newmovielist);
			oldmovielist.subjects=oldmovielist.subjects.concat(newmovielist.subjects);
			_this.setData({
				movie_subjects:oldmovielist,
				start:_this.data.count+_this.data.start
			})
		});
		wx.hideNavigationBarLoading();
	},
	searchmovie(){
		const pages = getCurrentPages()
		console.log(pages[1].route);
		const url = pages[1].route;
		wx.navigateTo({
			url:'/page/search/search?url='+url
		})
	}
})
