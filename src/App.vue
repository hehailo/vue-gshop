<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
//引入
import Header from "./components/Header"
import Footer from "./components/Footer"

export default { 
  name: 'App',
  components: {
    // 注册
    Header,Footer
  }
}
</script>

<style>

</style>
