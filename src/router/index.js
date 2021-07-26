//引入并声明插件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Login from "@/pages/Login"

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