<template>
  <div>
    <TypeNav />
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
    import ListContainer from './ListContainer'
    import Recommend from './Recommend'
    import Rank from './Rank'
    import Like from './Like'
    import Floor from './Floor'
    import Brand from './Brand'
    export default {
        name:'Home',
        components:{
          ListContainer,
          Recommend,
          Rank,
          Like,
          Floor,
          Brand
        }
    }
</script>

<style lang="less" scoped>

</style>