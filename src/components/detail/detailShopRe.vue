<template>
  <div class="hot_shopping">
      <detail-re-header></detail-re-header>
      <detail-re-show></detail-re-show>
  </div>
</template>
<script type="text/ecmascript-6">
  import detailReHeader from './detailReHeader.vue'
  import detailReShow from './detailReShow.vue'

  export default {
    components: {
      detailReHeader,
      detailReShow
    },
  }
</script>
<style scoped>
  @import "../../assets/css/ordershow.css";
</style>

