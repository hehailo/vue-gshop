<template>
          <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <!-- <a href="###">登录</a> -->
                            <router-link to="/login">登录</router-link>
                            <router-link class="register" to="/register">免费注册</router-link>
                            <!-- <a href="###" class="register">免费注册</a> -->
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                    <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a> -->
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" v-model="keyword" id="autocomplete" class="input-error input-xxlarge" />
                        <button @click="toSearch" class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                    </form>
                </div>
            </div>
        </header>

</template>

<script>
    export default {
        name:'Header',
        data(){
          return {
            keyword:''
          }
        },
        methods:{
          toSearch(){

            // 如果传递的参数包含params参数，就不能使用path去配合，只能用name去配合
            let location = {
              name: "search",
                // 面试3   如果指定name与params配置, 
                //但params中数据是一个"", 无法跳转，路径会出问题
                // 1、不传params参数
                // 2、首先必须在params参数可传可不传的前提下，
                //当传递的参数是空串的时候，传递成undefined,就不出问题
                params: { keyword: this.keyword || undefined},
            };

            //如果是从home页跳search页，就push
            //如果是search页跳search页，就replace
            // if (this.$route.path !== "/home") {
            //   this.$router.replace(location);
            // } else {
            //   this.$router.push(location,()=>{});
            //   this.$router.push(location,()=>{},()=>{});
            // }


            this.$router.push({
                name: "search",
                params: { keyword: this.keyword || undefined},
                query: { keyword1: this.keyword.toUpperCase() },
            }).catch(() => {});
          }
        }

    }
</script>

<style lang="less" scoped>
    .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }

</style>