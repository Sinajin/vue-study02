<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            info:{}
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get("api/goods/getdesc/" + this.id).then(result =>{
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                    console.log(this.info)
                }
            });
        }
    }
}
</script>

<style lang="less">
    .goodsdesc-container{
        padding:4px;
        h3{
            font-size:16px;
            color:#266aff;
            text-align:center;
            margin:15px 0;
        }
       .content{
           img{
           width:100%;
        } 
       }
    }
</style>

