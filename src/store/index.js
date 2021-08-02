import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//vuex当中的4个核心概念  
const state = {
    name:"cat"
};  //存数据
const mutations = {};   //直接修改数据
const actions = {};   //一般是异步发请求 提交mutations
const getters = {}; //相当于计算属性

import home from './home'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{ // modules代表模块化 
        home,
    }
})