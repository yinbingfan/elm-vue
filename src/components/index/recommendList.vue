<template>
  <!--<h3 class="recommend_title">推荐商家</h3>-->
  <router-link to="/shopClass">
    <section class="recommend_list">
      <recommend-list-item :item="n" v-for="n in reList">{{n}}</recommend-list-item>
    </section>
  </router-link>
</template>

<script type="text/ecmascript-6">
  import recommendListItem from './recommendListItem'
  export default {
    props:['reList'],
    data(){
      return{

      }
    },
    components:{
      recommendListItem
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
