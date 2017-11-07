<template>
 <div class="shopping">
      <detail-shop-side></detail-shop-side>
      <div class="shopping_show">
            <detail-shop-re></detail-shop-re>
      </div>
 </div>
</template>
<script type="text/ecmascript-6">
  import detailShopSide from './detailShopSlide.vue'
  import detailShopRe from './detailShopRe.vue'

  export default {
    components: {
      detailShopSide,
      detailShopRe
    },
  }
</script>
<style scoped>
  @import "../../assets/css/ordershow.css";
</style>
