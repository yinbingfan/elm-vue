<template>
  <div >
      <section>
          <detail-section-tbs></detail-section-tbs>
          <detail-shop-box></detail-shop-box>
      </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import detailSectionTbs from './detailSectionTbs.vue'
  import detailShopBox from './detailShopBox.vue'

  export default {
    components: {
      detailSectionTbs,
      detailShopBox
    },
  }
</script>
<style scoped>
  @import "../../assets/css/ordershow.css";
</style>
