<template>
   <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
	        	<div class="mui-card-content">
	        		<div class="mui-card-content-inner">
	        			<mt-switch></mt-switch>
						<img :src="item.thumb_path" alt="">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">{{item.sell_price}}</span>
								<numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
								<a href="#">删除</a>
							</p>
						</div>
	        		</div>
	        	</div>
	        </div>
            
        </div>
   </div>
</template>
<script>
import numbox from './subcomponents/shopcar_numbox'
export default {
	data(){
		return{
			goodslist:[]
		}
	},
	created(){
		this.getGoodsList()
	},
	methods:{
		getGoodsList(){
			var idArr = [];
			this.$store.state.car.forEach(item => idArr.push(item.id));
			if(idArr.length<= 0){
				return;
			}
			this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result =>{
				if(result.body.status ===0){
					this.goodslist = result.body.message;
					// console.log(this.goodslist);
				}
			});
		}
	},
    components:{
		numbox
	}
}
</script>
<style lang="less" scoped>
    .shopcar-container{
        background-color: #eee;
		overflow:hidden;
		.goods-list{
			.mui-card-content-inner{
				display:flex;
				align-items:center;
			}
			img{
				height:60px;
				width:60px;
			}
		}
		h1{
			font-size:14px;
		}
		.info{
			display:flex;
			flex-direction:column;
			justify-content:space-between;
			.price{
				color:red;
				font-size:bold;
			}
		}
    }
</style>
