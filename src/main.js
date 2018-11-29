import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state:{//this.$store.state
        car:car
    },
    mutations:{//this.$stores.commit('方法名','按需传入唯一参数')
        addToCar(state,goodsinfo){
            var flag = false
           state.car.some(item =>{
               if(item.id == goodsinfo.id){
                   item.count += parseInt(goodsinfo.count)
                   flag = true
                   return true
               }
           })
           if(!flag){
               state.car.push(goodsinfo)
           } 
           localStorage.setItem('car',JSON.stringify(state.car))
           console.log(state.car);
        }
    },
    getters:{//this.$store.getters
        getAllCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c += item.count
            })
            return c
        },
        getGoodsCount(state){
            var o = {}
            state.car.forEach(item =>{
                o[item.id] = item.count
            })
            return o
        }
    }
})

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr,pattern ="YYYY-MM-DD HH:mm:ss" ){
    return moment(dataStr).format(pattern)
})


// 导入app根组件
// 导入Mint-UI中的组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// // 轮播图
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
// 导入懒加载
// import {Lazyload} from 'mint-ui';

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
// Vue.use(Lazyload);
// 缩略图插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入router.js路由模块
import router from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899';

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router,//挂在路由对象到实例
    store //挂在状态管理对象
})