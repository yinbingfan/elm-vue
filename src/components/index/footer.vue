<template>
  <footer>
    <ul class="footer_list">
      <li>
        <router-link to="/" class="footer_list_link">
          <img class="blueBtn" src="../../assets/images/img_yxz/elm.png" alt="">
          <img class="grayBtn" src="../../assets/images/img_yxz/饿了吗优惠券1.png" alt="">
          <p class="active">外卖</p>
        </router-link>
      </li>
      <li>
        <router-link to="/find" class="footer_list_link">
          <img class="grayBtn" src="../../assets/images/img_yxz/finf.png" alt="">
          <img class="blueBtn" src="../../assets/images/img_yxz/find.png" alt="">
          <p>发现</p>
        </router-link>
      </li>
      <li>
        <router-link to="/orders" class="footer_list_link">
          <img class="grayBtn" src="../../assets/images/img_yxz/订单.png" alt="">
          <img class="blueBtn" src="../../assets/images/img_yxz/dingdan1.png" alt="">
          <p>订单</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mine" class="footer_list_link">
          <img class="grayBtn" src="../../assets/images/img_yxz/my1.png" alt="">
          <img class="blueBtn" src="../../assets/images/img_yxz/my.png" alt="">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script  type="text/ecmascript-6">

//  import '../../assets/js/jquery-1.8.3.min.js'
//  import '../../assets/js/index.js'
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
