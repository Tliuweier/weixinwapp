const util = require("../../utils/utils.js");
const app = getApp();
const orders = {
	address:true,
	orderId:'10000201801251613',
	total:610,
	shops:[
		{
			shopId:'0236',
			shopTitle:'一百块都不要手机店',
			goods:[
				{
					goodTitle:'2017冬装新款韩版修身学生袄轻薄休闲棉服外套藏青色-G839L',
					goodsid:'100201',
					imageurl:'../../images/touxiang.jpg',				
					specifications:'酒红色-G839L',
					price:100,
					num:1
				},{
					goodTitle:'2017冬装新款韩版修身学生袄轻薄休闲棉服外套酒红色-G839L',
					goodsid:'100201',
					imageurl:'../../images/touxiang.jpg',				
					specifications:'酒红色-G839L',
					price:10,
					num:1
				}
			],
			express:0
		},
		{
			shopId:'0235',
			shopTitle:'老刘开的手机店',
			goods:[
				{
					goodsid:'100201',
					imageurl:'../../images/touxiang.jpg',
					goodTitle:'小米 红米 4X 全网通版 3GB+32GB磨砂黑 移动联通电信4G手机',
					specifications:'重量：0.270kg;规格：磨砂黑，3GB 32GB',
					price:200,
					num:2
				},{
					
					goodsid:'100301',
					imageurl:'../../images/touxiang.jpg',
					goodTitle:'小米 红米 4X 全网通版 3GB+32GB磨砂黑 移动联通电信4G手机',
					specifications:'重量：0.270kg;规格：磨砂黑，3GB 32GB',
					price:100,
					num:1
				}
			],
			express:10
		}
	]
	}

Page({
	data:{
		orderList:[],
		freight:0,
		paynum:0
	},
	onLoad(){
		wx.setNavigationBarTitle({
       		title: '确认订单'
     	})
     	var freight = 0
		for (var i = 0; i < orders.shops.length; i++) {
			freight = orders.shops[i].express+freight;
		};
		var paynum =orders.total+freight;
     	this.setData({
     		orderList:orders,
     		paynum:paynum,
     		freight:freight
     	})
	},
	 showInvcode(){
	      wx.showModal({
	        title: "京豆使用规则",
	        content: "就算你是刘强东都不能用。",
	        showCancel: false,
	        confirmText: "确定",
	        confirmColor:"#E55F68"
	      })
    },
    showprice(){
    	  wx.showModal({
	        title: "价格说明",
	        content: "价格想多少就多少",
	        showCancel: false,
	        confirmText: "确定",
	        confirmColor:"#E55F68"
	      })
    },
    toAddress(){
    	wx.navigateTo({
			url:'/page/Address/address'
		})
    }
})