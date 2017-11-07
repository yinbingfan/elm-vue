<template>
  <footer>
    <div class="top">
      <h1>{{item.discount}}</h1>
      <div class="top_01">
        <p class="p_02"><span>已选商品</span><span>清空</span></p>
        <div class="canhe">
          <h4>餐盒</h4>
          <span>￥4</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="elmBut">
        <span class="sp_03">0</span>
        <i class="elm"></i>
      </div>
      <div class="peisong">
        <p><i>￥</i><span class="sp_02">0</span></p>
        <h1>另需要配送费￥3.5元</h1>
      </div>
      <router-link to="/goodsCartPay">去结算</router-link>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['item']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/detail.css";

</style>
