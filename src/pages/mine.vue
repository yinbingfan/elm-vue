<template>
  <div>
    <mine-top></mine-top>
    <mine-logon></mine-logon>
    <con-mid></con-mid>
    <mine-content></mine-content>
    <mine-footer></mine-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import mineTop from '../components/mine/mineTop.vue'
  import MineContent from '../components/mine/MineContent.vue'
  import conMid from '../components/mine/conMid.vue'
  import mineLogon from '../components/mine/mineLogon.vue'
  import mineFooter from '../components/index/footer.vue'
  import '../assets/js/homePage'

  export default {
    components: {
      mineTop,
      MineContent,
      conMid,
      mineLogon,
      mineFooter
    }
  }
</script>
<style scoped>
  @import "../assets/css/mine.css";
  @import "../assets/css/index.css";
</style>
