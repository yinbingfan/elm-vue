<template>
  <header>
    <router-link to="/shopClass" class="header_top">
      <i class="i_01"></i>
      <p>
        <i class="i_pin"></i>
        <i class="i_car"></i>
        <i class="i_dian"></i>
      </p>
    </router-link>
    <div class="header_logo item">
      <div class="logo"><img :src="item.pic"></div>
      <div class="header_logo_right">
        <h1 class="dq"><span>{{item.store}}</span><i class="i_you"></i></h1>
        <div class="logo_bottom">
          <h2>欢迎光临，用餐高峰期请提前下单，谢谢。</h2>
          <p>
            <span>品牌</span>
            <span>蜂鸟转送。约52分钟</span>
          </p>
        </div>
      </div>
    </div>
  </header>
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
