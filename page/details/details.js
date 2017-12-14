const responseData=
	{
		goodid:17,
		imgUrls:[
			'/images/swiper1.jpg',
	      '/images/swiper2.jpg',
	      '/images/swiper3.jpg'
	      ],
	      goodsname:'Apple iPhone X 64GB黑色 移动联通电信4G手机 Apple iPhone X 64GB黑色 移动联通电信4G手机 ',
	      price:'8399.00',
	      good_color:[
	      	{name:'银色',id:"银色",goodid:17},
	      	{name:'深空灰色',id:'深空灰色',goodid:17}
	      	],
	      good_size:[{name:'公开版',id:"公开版",goodid:17},{name:'保险套餐版',id:"保险套餐版",goodid:17}],
	      good_memory:[{name:'64GB',id:"64GB",goodid:17},{name:'256GB',id:"256GB",goodid:17}],
	      goodimage:'/images/iphonex.jpg'
	}

const app = getApp();

Page({
	data:{
		select:0,
		goodDetails:[],
    	status:false,
    	colorname:'',
    	colortid:'',
    	sizeename:'',
    	sizeid:'',
    	memoryname:'',
    	memoryid:'',
    	//选中的属性
    	choosecolor:[],
    	choosesize:[],
    	choosememory:[],
    	goodnum:1,
    	goodimg:'',
    	goodprice:'',
    	goodid:'',
    	goodname:'',
    	chooselist:'',
    	getnum:''
	},
	onLoad(){
		this.setData({
			goodDetails:responseData
		})
	},
	changeArea(e){
		let area = e.currentTarget.dataset.area;
		this.setData({
			select:area
		})
	},
	Selected(){
		this.setData({
			status:true
		})
	},
	canceled(){
		let str ='';
		//判断空字符串(typeof(this.data.colorname) == "undefined" && this.data.colorname.length==0)
		if(this.data.colorname.length>0){
			str = str + this.data.colorname+',';
		}
		if(this.data.sizeename.length>0){
			str = str + this.data.sizeename+',';
		}
		if(this.data.memoryname.length>0){
			str = str + this.data.memoryname+',';
		}
		str = str +(this.data.goodnum+'个')
		

		this.setData({
			chooselist:str,
			status:false
		})
	},
	selectcolor(e){
		let select =  e.currentTarget.dataset.select;
		let name = e.currentTarget.dataset.name;
		let price = e.currentTarget.dataset.price;
		let goodname = e.currentTarget.dataset.goodname;
		let goodimg = e.currentTarget.dataset.goodimg;
		let goodid = e.currentTarget.dataset.goodid;
		this.setData({
			colorname:name,
			colortid:select
		})
		let str = select +','+name
		let choosecolor = this.data.choosecolor;
		choosecolor = [];
		choosecolor.push(str);
		this.setData({
			goodprice:price,
			goodname:goodname,
			goodimg:goodimg,
			goodid:goodid,
			choosecolor:choosecolor
		})
	},
	selectsize(e){
		let select =  e.currentTarget.dataset.select;
		let name = e.currentTarget.dataset.name;
		this.setData({
			sizeename:name,
			sizeid:select
		})
		let str = select +','+name
		let choosesize = this.data.choosesize;
		choosesize = [];
		choosesize.push(str);
		this.setData({
			choosesize:choosesize
		})

	},
	selectmemory(e){
		let select =  e.currentTarget.dataset.select;
		let name = e.currentTarget.dataset.name;
		this.setData({
			memoryname:name,
			memoryid:select
		})
		let str = select +','+name
		let choosememory = this.data.choosememory;
		choosememory = [];
		choosememory.push(str);
		this.setData({
			choosememory:choosememory
		})
	},
	minuscount(e){
		let num = e.currentTarget.dataset.num;
		if(num<=1){
			return ;
		}
		num = num-1;
		this.setData({
			goodnum :num
		})
	},
	addcount(e){
		let num = e.currentTarget.dataset.num;
		num = num+1;
		this.setData({
			goodnum :num
		})
	},
	addCart(e){
		//数量，价格，名称，id,选中的属性,图片
		let choosesize =this.data.choosesize;
		let choosememory = this.data.choosememory;
		let choosecolor = this.data.choosecolor;
		let goodnum = this.data.goodnum;
		let goodprice = this.data.goodprice;
		let goodid = this.data.goodid;
		let goodimg = this.data.goodimg;
		let goodname  = this.data.goodname;
		let str ='';
		if(Object.prototype.toString.call(choosecolor) === '[object Array]' && choosecolor.length === 0){
			str=str +'没选择颜色,';
		}
		if(Object.prototype.toString.call(choosesize) === '[object Array]' && choosesize.length === 0){
			str = str + '没选择尺寸,';
		}
		if(Object.prototype.toString.call(choosememory) === '[object Array]' && choosememory.length === 0){
			str = str + '没选择内存';
		}
		if(str.length>0){
			 wx.showToast({
        		title: '你还没选择机型',
	       		duration: 3000,
	      	})
			console.log(str)
			return
		}
		this.setData({
			getnum:goodnum
		})
		wx.showToast({
	        title: '添加成功！',
	        duration: 2000,
	    })
	},saveOrder(e){
		//数量，价格，名称，id,选中的属性,图片
		let choosesize =this.data.choosesize;
		let choosememory = this.data.choosememory;
		let choosecolor = this.data.choosecolor;
		let goodnum = this.data.goodnum;
		let goodprice = this.data.goodprice;
		let goodid = this.data.goodid;
		let goodimg = this.data.goodimg;
		let goodname  = this.data.goodname;
		let str ='';
		if(Object.prototype.toString.call(choosecolor) === '[object Array]' && choosecolor.length === 0){
			str=str +'没选择颜色,';
		}
		if(Object.prototype.toString.call(choosesize) === '[object Array]' && choosesize.length === 0){
			str = str + '没选择尺寸,';
		}
		if(Object.prototype.toString.call(choosememory) === '[object Array]' && choosememory.length === 0){
			str = str + '没选择内存';
		}
		if(str.length>0){
			 wx.showToast({
        		title: '你还没选择机型',
	       		duration: 3000,
	      	})
			console.log(str)
			return
		}
		wx.showToast({
	        title: '提交订单成功！',
	        duration: 2000,
	    })
	}
})