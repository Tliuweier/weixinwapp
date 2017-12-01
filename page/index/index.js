const util = require('../../utils/utils.js');
Page({
	data:{
		loading:false,
		in_theaters_subjects:[],
		coming_soon_subjects:[],
		top250_subjects:[],
		us_box_subject:[]	
	},
	onLoad(){
		const _this = this;
		util.getmovieList({count:4},"正在热映","/v2/movie/in_theaters").then((in_theaters_Data)=>{
			util.getmovieList({count:4},"即将上映","/v2/movie/coming_soon").then((coming_soon_Data)=>{
				util.getmovieList({count:4},"TOP250","/v2/movie/top250").then((top250_Data)=>{
					util.getmovieList({count:4},"北美票房","/v2/movie/us_box").then((us_box_Data)=>{
						_this.setData({

							in_theaters_subjects:util.movieDataFactory(in_theaters_Data),
							coming_soon_subjects:util.movieDataFactory(coming_soon_Data),
							top250_subjects:util.movieDataFactory(top250_Data),
							//us_box_subject:util.movieDataFactory(us_box_Data.data)
							loading:true
						})
					})
				})
			})
			// _this.setData({

			// 				in_theaters_subjects:util.movieDataFactory(in_theaters_Data),
			// 				// coming_soon_subjects:util.movieDataFactory(coming_soon_Data),
			// 				// top250_subjects:util.movieDataFactory(top250_Data),
			// 				//us_box_subject:util.movieDataFactory(us_box_Data.data)
			// 				loading:true
			// 			})
		})
		
		
	},
	moviemore(e){
		//console.log(e.currentTarget.dataset.movieurl);
		const movieurl = e.currentTarget.dataset.movieurl


		wx.navigateTo({
			url:'/page/moviemore/moviemore?url='+movieurl
		})
	},
	ToMovieitem(e){
		const movieid = e.currentTarget.dataset.movieid;
		wx.navigateTo({
			url:'/page/movieitem/movieitem?id='+movieid
		})
	},
	searchmovie(e){
		const pages = getCurrentPages()
		console.log(pages[0].route);
		const url = pages[0].route
		wx.navigateTo({
			url:'/page/search/search?url='+url
		})
	}
	
	

})