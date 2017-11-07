<template>
  <router-link :to="{ name: 'detail', params:{ goodsList: item}}" class="item fineFoods">
    <img :src="item.pic">
    <p class="shopName">{{item.title}}</p>
        <div class="purchase">
      <p class="purchasep1"><span>{{item.price}}</span><span>{{item.oriprice}}</span></p>
      <span class="qiang">抢</span>
    </div>
    <div class="title">3.3折</div>
    <div class="store">
      <img src="../../assets/images/fb-img/shangdian.png" alt="">
      {{item.store}}
    </div>
  </router-link>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['item'],
    data () {
      return {
      }
    },
    mounted () {
      console.log(11);
    }
  }
</script>
<style scoped>
  @import '../../assets/css/shoppingclass.css';
</style>
