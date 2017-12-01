Page({
	data:{
		num:'33%',
		EvenNum:[0,8,14,18,22],
		hour:new Date().getHours(),
		nowDate:new Date().toLocaleString(),
		endDate:'',
		thours:'**',
		tminutes:'**',
		tseconds:'**',
		tthours:'**',
		ttminutes:'**',
		ttseconds:'**',
		sign:true,
		tsign:false

	},
	
	onLoad(){

		if(this.data.hour>=12&&this.data.hour<20){
			//console.log(123);
			const tomorrow =this.getTomorrow(1);
			this.getdate(tomorrow,"12:00:00")
		}else if(this.data.hour<12){

			const tomorrow =this.getTomorrow(0);
			this.getdate(tomorrow,"12:00:00")
		}else if(this.data.hour>20){
			const tomorrow =this.getTomorrow(1);
			this.getdate(tomorrow,"12:00:00")
		}
		
		// const time =this.getdate();
		// console.log(time);
		//console.log(this.getdate())
		//console.log(new Date("2017-08-12"+" "+"17:30:00"))
		// if(hour)
	},
	ToClassify(e){
		console.log(e);
		wx.navigateTo({
			url:'/page/classify/classify'
		})	
	},
	changeTime1(){
		this.setData({
			sign:true,
			tsign:false
		})
	},
	changeTime(){
		console.log(123);
		 const changeTime = "20:00:00"
		 this.setData({
		 	sign:false,
		 	tsign:true
		 })
		 if(this.data.hour>20){
		 	const tomorrow =this.getTomorrow(1);
		 	this.getdate1(tomorrow,changeTime);
		 }else{
		 	const tomorrow =this.getTomorrow(0);
		 	this.getdate1(tomorrow,changeTime);
		 }
	},
	getTomorrow(dayCount){
		if(null==dayCount){
			dayCount=0;
		}
		const dd = new Date();
		dd.setDate(dd.getDate()+dayCount);
		const y = dd.getFullYear();
		const m = dd.getMonth()+1;
		const d = dd.getDate();
		return y+"-"+m+"-"+d
	},
	getdate1(tomorrow,changehours){
		const _this = this;
		
		var x = setInterval(function(){
			// console.log(_this);
			// const tomorrow =_this.getTomorrow(1);
			const tomorrowDate = new Date(tomorrow+" "+changehours);
			const diff = tomorrowDate.getTime()-new Date().getTime();
			const tdays = Math.floor(diff / (1000 * 60 * 60 * 24));
           	const thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           	const tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
           	const tseconds = Math.floor((diff % (1000 * 60)) / 1000);
			if(diff<0){
				clearInterval(x);
				_this.expired  = true;
			}
			_this.setData({
				// tdays:(tdays < 10) ? '0' + tdays : tdays,
				tthours:(thours < 10) ? '0' + thours : thours,
				ttminutes:(tminutes < 10) ? '0' + tminutes : tminutes,
				ttseconds:(tseconds < 10) ? '0' + tseconds : tseconds
			})

		},1000);
	},
	getdate(tomorrow,changehours){
		const _this = this;
		
		var x = setInterval(function(){
			// console.log(_this);
			// const tomorrow =_this.getTomorrow(1);
			const tomorrowDate = new Date(tomorrow+" "+changehours);
			const diff = tomorrowDate.getTime()-new Date().getTime();
			const tdays = Math.floor(diff / (1000 * 60 * 60 * 24));
           	const thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           	const tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
           	const tseconds = Math.floor((diff % (1000 * 60)) / 1000);
			if(diff<0){
				clearInterval(x);
				_this.expired  = true;
			}
			_this.setData({
				// tdays:(tdays < 10) ? '0' + tdays : tdays,
				thours:(thours < 10) ? '0' + thours : thours,
				tminutes:(tminutes < 10) ? '0' + tminutes : tminutes,
				tseconds:(tseconds < 10) ? '0' + tseconds : tseconds
			})

		},1000);
		
	}
})