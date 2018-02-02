const util = require("../../utils/utils.js");
const app = getApp();
const address =[
	{
		name:'习近平',
		phone:'13172277837',
		province:'广东',
		provinceid:'10001',
		city:'佛山市',
		cityid:'1000101',
		area:'顺德区',
		areaid:'100010101',
		detailedAddress:'北滘镇碧桂园总部大楼',
		default:false
	},
	{
		name:'谭锦威',
		phone:'13172277837',
		province:'广东',
		provinceid:'10001',
		city:'佛山市',
		cityid:'1000101',
		area:'顺德区',
		areaid:'100010101',
		detailedAddress:'北滘镇碧桂园总部大楼',
		default:true
	},
	{
		name:'谭锦威',
		phone:'13172277837',
		province:'广东',
		provinceid:'10001',
		city:'佛山市',
		cityid:'1000101',
		area:'顺德区',
		areaid:'100010101',
		detailedAddress:'北滘镇碧桂园总部大楼',
		default:false
	}
]
Page({
	data:{
		addressList:[]
	},
	onLoad(){
		wx.setNavigationBarTitle({
       		title: '收货地址'
     	});
		this.ChangePhone(address);
     	this.setData({
     		addressList:address
     	});
	},
	toNewAddress(){
		wx.navigateTo({
			url:'/page/newaddress/newaddress'
		})
	},
	ChangePhone(address){
		for (var i = 0; i < address.length; i++) {
			address[i].phone = address[i].phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
		}
		return address;
	},
	changeSelect(e){

		var index = parseInt(e.currentTarget.dataset.index);
		// console.log(index);



		var select = this.data.addressList[index].default;
		if (select) {
			//不改变
		}else{
			//找出已选中的，改变他的状态
			for (var i = 0; i < this.data.addressList.length; i++) {
				if (this.data.addressList[i].default) {
					this.data.addressList[i].default = !this.data.addressList[i].default;
				}
			}
			//改变了未选中的
			this.data.addressList[index].default = !select;
			var addressList = this.data.addressList;
			this.setData({
				addressList:addressList
			})
		}

		
	}
})