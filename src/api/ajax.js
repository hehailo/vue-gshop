// ajax 的二次封装

// 1、基础url 超时配置
// 2、 请求拦截器、响应拦截器
// 3. 进度条 nprogress

import axios from "axios";
import Nprogress from "nprogress";

// 基础url 超时配置
const service = axios.create({
  //配置基础路径和超时限制
  baseURL: "/api", //设置，当前项目当中所有接口路径的公共路径部分，基础路径
  timeout: 20000, //当ajax请求超过设置的这个事件就会报错
});

//请求拦截器
service.interceptors.request.use(
    (config)=>{   //成功回调
        //config 请求报文
        Nprogress.start();
        return config;
    },
    // ()=>{}  //失败回调 一般不写
)
// 响应拦截器
service.interceptors.response.use(
    (response)=>{   //成功回调
        Nprogress.done();
        return response.data;
    },
    (error)=>{//失败回调
        Nprogress.done();
        alert('发送ajax请求失败'+error.message||'未知错误')
        // return Promise.reject(new Error("发送请求失败！"));
        return new Promise(()=>{});
    }  
)
export default service;

