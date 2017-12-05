const responseData =[
	{
		selected:false,
		storeid:'1001',
		storename:'芭登多伦服饰旗舰店',
		fullcut:'购满179元，可减10元,',
		cutnum:[10,20,30],
		goods:[
			{
				selected:false,
				goodsid:'100101',
				imageurl:'../../images/test.jpg',
				goodsname:'2017冬装新款韩版修身学生袄轻薄休闲棉服外套藏青色-G839L',
				specifications:'藏青色-G839L',
				price:89.9,
				num:1
			},{
				selected:false,
				goodsid:'100102',
				imageurl:'../../images/test.jpg',
				goodsname:'2017冬装新款韩版修身学生袄轻薄休闲棉服外套酒红色-G839L',
				specifications:'酒红色-G839L',
				price:89.9,
				num:2
			},{
				selected:false,
				goodsid:'100103',
				imageurl:'../../images/test.jpg',
				goodsname:'2017冬装新款韩版修身学生袄轻薄休闲棉服外套酒红色-G839L',
				specifications:'酒红色-G839L',
				price:89.9,
				num:1
			}
		]
	},
	{
		selected:false,
		storeid:'1002',
		storename:'京东自营',
		fullcut:'购满1799元，可减100元',
		cutnum:[100,200,300],
		goods:[
			{
				selected:false,
				goodsid:'100201',
				imageurl:'../../images/touxiang.jpg',
				goodsname:'小米 红米 4X 全网通版 3GB+32GB磨砂黑 移动联通电信4G手机',
				specifications:'重量：0.270kg;规格：磨砂黑，3GB 32GB',
				price:3899.9,
				num:1
			}
		]
	},{
		selected:false,
		storeid:'1003',
		storename:'小米商城',
		fullcut:'购满1799元，可减100元',
		cutnum:[100,200,300],
		goods:[
			{
				selected:false,
				goodsid:'100301',
				imageurl:'../../images/touxiang.jpg',
				goodsname:'小米 红米 4X 全网通版 3GB+32GB磨砂黑 移动联通电信4G手机',
				specifications:'重量：0.270kg;规格：磨砂黑，3GB 32GB',
				price:899.9,
				num:1
			}
		]
	}
]
Page({
	data:{
		storelist:[],
		number:0,
		count:0,
		selectAllStatus:false,
		hasList:false
		
	},
	onLoad(){
		
		this.setData({
			hasList:!this.data.hasList,
			storelist:responseData

		})
	},
	catchToOrder(e){
		let number = this.data.number
		if (number<=0) {
			console.log("没选商品，不能提交订单！")
			return;
		}
		console.log("可以提交订单！")
	},
	catchdelete(e){
		let index = parseInt(e.currentTarget.dataset.index);
		
		let storelist = this.data.storelist;
		storelist.splice(index,1);
		console.log(storelist);
		let selectAllStatus =this.data.selectAllStatus; 
		let hasList;
		if(storelist.length==0){
			selectAllStatus=false;
			hasList = false
		}
		this.setData({
			hasList:hasList,
			selectAllStatus:selectAllStatus,
			storelist:storelist
		})
		this.getTotalPrice();
	},
	minuscount(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let parentindex = parseInt(e.currentTarget.dataset.parentIndex);
		let storelist = this.data.storelist; 
		let num =this.data.storelist[parentindex].goods[index].num;
		if(num<=1){
			return;
		}
		num = num-1;
		this.data.storelist[parentindex].goods[index].selected = true;
		this.data.storelist[parentindex].goods[index].num = num;
		this.setData({
			storelist:storelist
		})
		this.getTotalPrice();
	},
	addcount(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let parentindex = parseInt(e.currentTarget.dataset.parentIndex);
		let storelist = this.data.storelist; 
		let num =this.data.storelist[parentindex].goods[index].num;
		num = num + 1;
		this.data.storelist[parentindex].goods[index].selected = true;
		this.data.storelist[parentindex].goods[index].num = num;
		this.setData({
			storelist:storelist
		})
		this.getTotalPrice();
	},
	//goods单选
	catchSelectgoods(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let parentindex = parseInt(e.currentTarget.dataset.parentIndex);
		let storelist = this.data.storelist
		let selected = storelist[parentindex].goods[index].selected;
		this.data.storelist[parentindex].goods[index].selected = !selected;
		let goods =this.data.storelist[parentindex].goods;
		let selectAllStatus;
		if(!selected){
			let isALLEven = goods.every(this.isEvenGoods);
			if(isALLEven){
				console.log("全选了")
				storelist[parentindex].selected = true;
				let isALlEvenstore =  storelist.every(this.isEven);
				if(isALlEvenstore){
					selectAllStatus = true;
				}
			}else{
				console.log("没全选")
			}
		}else{
			this.data.storelist[parentindex].selected = !selected;
			selectAllStatus = false;

		}
		
		this.setData({
			selectAllStatus:selectAllStatus,
			storelist:storelist
		})
		this.getTotalPrice();
	},
	isEvenGoods(params){
		return params.selected == true;
	},
	// cart单选
	catchSelect(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let selected = this.data.storelist[index].selected
		let goodlist = this.data.storelist[index].goods
		let storelist = this.data.storelist
		let selectAllStatus ;
		this.data.storelist[index].selected = !selected;
		if(!selected){
			let isALLEven = storelist.every(this.isEven)
			if(isALLEven){
				selectAllStatus=true;
			}
			for(let i=0;i<goodlist.length;i++){
			 		goodlist[i].selected = !selected;
			 }
		}else{
			for(let i=0;i<goodlist.length;i++){
				goodlist[i].selected = !selected;
			}
			selectAllStatus=false;
		}
		
		this.setData({
			selectAllStatus:selectAllStatus,
			storelist:storelist
		});
		this.getTotalPrice();
	},
	isEven(params){
		return params.selected == true;
	},
	catchSelectAll(){
		 // console.log(12355);
		 let selectAllStatus = this.data.selectAllStatus;
		 selectAllStatus = !selectAllStatus;
		 let storelist = this.data.storelist;
		 for(let i=0;i<storelist.length;i++){
			storelist[i].selected = selectAllStatus;
			const goods = storelist[i].goods;
			for(let j=0;j<goods.length;j++){
				goods[j].selected = selectAllStatus;
			}
		}
		this.setData({
			storelist:storelist,
	        selectAllStatus:selectAllStatus
    	});
    	this.getTotalPrice();
	},
	//总计
	getTotalPrice(){
		let storelist = this.data.storelist;
		let total = 0;
		let number = 0;
		for(let i = 0;i<storelist.length;i++){
			if(storelist[i].selected){
				let goods = storelist[i].goods;
				for(let j=0;j<goods.length;j++){
						total += goods[j].num * goods[j].price;
						number +=goods[j].num;
				}
			}else{
				let goods = storelist[i].goods;
				for(let j=0;j<goods.length;j++){
					if(goods[j].selected){
						total += goods[j].num * goods[j].price;
						number +=goods[j].num;
					}
				}
			}
		}
		this.setData({
			count:total.toFixed(2),
			number:number,
			storelist:storelist
		})
	}
})