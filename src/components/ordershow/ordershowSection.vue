<template>
  <div id="section">
      <ordershow-section-header></ordershow-section-header>
      <ordershow-section-shop></ordershow-section-shop>
      <ordershow-section-shop></ordershow-section-shop>

  </div>
</template>
<script type="text/ecmascript-6">
  import ordershowSectionHeader from './ordershowSectionHeader.vue'
  import ordershowSectionShop from './ordershowSectionShop.vue'
  export default {
    components: {
      ordershowSectionHeader,
      ordershowSectionShop
    }
  }
</script>
<style scoped>
  @import "../../assets/css/ordershow.css";
</style>
