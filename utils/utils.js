const APIUrl = "https://api.douban.com"
function UrlFactory(url){
	return APIUrl+url;
}
function getUserInfo(params){
	const newurl ="https://easy-mock.com/mock/59c87b18e0dc663341b81e23/example/Userinfo";
	return new Promise((resolve,reject)=>{
		wx.request({
			url:newurl,
			data:params,
			header:{
				'content-type':'json'
			},
			success(res){
				console.log(res);
				resolve(res.data);
			},fail(err){
				console.log(err);
				reject(err);
			}
		})
	})
}
function getSearchMovie(params){
	const newurl = "/v2/movie/search";
	const serverUrl = UrlFactory(newurl);
	return new Promise((resolve,reject)=>{
		wx.request({
			url:serverUrl,
			data:params,
			header:{'content-type':'json'},
			success(res){
				console.log(res);
				resolve(res.data);
			},fail(err){
				reject(err);
				console.log(err);
			}
		})
	})
}

function getmovieList(params,title,url){
	const serverUrl = UrlFactory(url);
	return new Promise((resolve,reject)=>{
		wx.request({
			url: serverUrl, //
			data: params,
			header: {'content-type': 'json'},
			success: function(res) {		  		
				console.log(res);
				res.data.url = url;
				res.data.title = title;
				resolve(res.data)
			},
			fail:function(err){
				reject(err);
				console.log(err);
			}
		})
	})
};
function getMovieItem(requestData,url){
	const newurl = "/v2/movie/subject/"+url;
	const serverUrl = UrlFactory(newurl);
	return new Promise((resolve,reject)=>{
		wx.request({
			url:serverUrl,
			data:requestData,
			header:{'content-type':'json'},
			success(res){
				console.log(res);
				resolve(res.data);
			},
			fail(err){
				console.log(err);
				reject(err);
			}
		})
	})
};




function movieDataFactory(data){
	const movieData = [];
	for(const key in data.subjects){
		movieData.push({
			medium:data.subjects[key].images.medium,
			large:data.subjects[key].images.large,
			title:data.subjects[key].title,
			average:data.subjects[key].rating.average,
			id:data.subjects[key].id
		})
	}
	return{
		title:data.title,
		url:data.url,
		subjects:movieData
	}
}
module.exports={
	movieDataFactory:movieDataFactory,
	getmovieList:getmovieList,
	getMovieItem:getMovieItem,
	getSearchMovie:getSearchMovie,
	getUserInfo:getUserInfo
}