//引入并声明插件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Login from "@/pages/Login"



const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;


VueRouter.prototype.push = function(location,onResolved,onRejected){

    if(onResolved === undefined  && onRejected === undefined){
        return originPush.call(this,location).catch(()=>{});
    }else{
        return originPush.call(this,location,onResolved,onRejected)
    }

}


VueRouter.prototype.replace = function(location,onResolved,onRejected){

    if(onResolved === undefined  && onRejected === undefined){
        return originReplace.call(this,location).catch(()=>{});
    }else{
        return originReplace.call(this,location,onResolved,onRejected)
    }

}

export default new VueRouter({
    routes:[
        {
            // path:'/search',
            name:"search",
            path:'/search/:keyword?',  // ?代表我的params参数可传可不传
            component:Search
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

