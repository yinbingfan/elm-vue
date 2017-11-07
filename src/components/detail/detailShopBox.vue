<template>
  <div class="shoppingBox">
      <div class="shoppingContant">
            <detail-shopping></detail-shopping>
            <detail-shop-pingjia></detail-shop-pingjia>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import detailShopping from './detailShopShopping.vue'
  import detailShopPingjia from './detailShopPingjia.vue'
  export default {
    components: {
      detailShopping,
      detailShopPingjia
    },
  }
</script>
<style scoped>
  @import "../../assets/css/ordershow.css";
</style>
