<template>
  <div class="jianBox">
    <div id="jian_top">
      <p>
        <i>减</i>
        <span>{{item.discount}}</span>
      </p>
      <p>
        <span>3个活动</span>
        <i></i>
      </p>
    </div>
    <div id="jian_center">
      <i>折</i>
      <span>五折特惠--日式香酥咖喱泡芙+奥利奥标准杯（限13:00-15:59）</span>
    </div>
    <div id="jian_bottom">
      <i>减</i>
      <span>松饼套餐 立减18</span>
    </div>
  </div>
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
