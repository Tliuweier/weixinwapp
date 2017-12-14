const responseData=[{
	imgurl:'../../images/touxiang.jpg',
	title:'Apple iPhone 6 32GB黑色 移动联通电信4G手机',
	price:'2999.00',
	evaluate:'2653',
	praise:'95'
},{
	imgurl:'../../images/swiper1.jpg',
	title:'Apple iPhone 8 84GB黑色 移动联通电信4G手机',
	price:'5899.00',
	evaluate:'523',
	praise:'90'
},{
	imgurl:'../../images/swiper2.jpg',
	title:'Apple iPhone 7 64GB黑色 移动联通电信4G手机',
	price:'2466.00',
	evaluate:'302',
	praise:'91'
},{
	imgurl:'../../images/swiper3.jpg',
	title:'Apple iPhone X 64GB黑色 移动联通电信4G手机',
	price:'8299.00',
	evaluate:'200',
	praise:'91'
},{
	imgurl:'../../images/touxiang.jpg',
	title:'Apple iPhone 8plus 64GB黑色 移动联通电信4G手机',
	price:'6233.00',
	evaluate:'352',
	praise:'91'
},{
	imgurl:'../../images/test.jpg',
	title:'Apple iPhone 7plus 64GB黑色 移动联通电信4G手机',
	price:'2622.00',
	evaluate:'392',
	praise:'91'
},{
	imgurl:'../../images/touxiang.jpg',
	title:'Apple iPhone 6plus 64GB黑色 移动联通电信4G手机',
	price:'1999.00',
	evaluate:'422',
	praise:'91'
}]



Page({
	data:{
		text:'手机',
		goodlist:[]
	},
	Todetails(e){
		wx.navigateTo({
			url:'/page/details/details'
		})
	},
	onLoad(){
		this.setData({
			goodlist:responseData
		})
	},
	onReachBottom(){
		console.log("上拉")
		const _this = this;
		wx.showNavigationBarLoading();
			// const oldmovielist = _this.data.movie_subjects;
			// oldmovielist.subjects=oldmovielist.subjects.concat(newmovielist.subjects);
			let oldlist = _this.data.goodlist;
			oldlist = oldlist.concat(responseData);
			_this.setData({
				goodlist:oldlist
			})
		wx.hideNavigationBarLoading();
	}
})