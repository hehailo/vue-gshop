import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

//全局注册的组件，如果一个非路由组件被多个组件使用，
//那么定义在components，注册在全局
import TypeNav from '@/components/TypeNav'
// Vue.use('TypeNav',TypeNav);
Vue.component(TypeNav.name,TypeNav);


//测试 api
// import {reqCategoryList} from '@/api'
// reqCategoryList();

new Vue({
  render: h => h(App),
  store,
  router,//我们所有的组件内部都可以使用this.$router和this.$route
}).$mount('#app')
