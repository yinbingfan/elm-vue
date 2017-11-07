<template>
  <div>
    <banner-swiper></banner-swiper>
    <classify-adv></classify-adv>
    <recommend-title></recommend-title>
    <recommend-list :reList="recommendList"></recommend-list>
  </div>
</template>

<script  type="text/ecmascript-6">
  import bannerSwiper from './bannerSwiper.vue'
  import classifyAdv from './classifyAdv.vue'
  import recommendList from './recommendList.vue'
  import recommendTitle from './recommendTitle.vue'
  import ShopCartService from '../../fetch/ShopService'
export default {
    components: {
      bannerSwiper,
      classifyAdv,
      recommendList,
      recommendTitle
    },
  data(){
      return{
        recommendList:[]
      }
  },
  methods: {
    initData: function () {
      ShopCartService.getShopCartListByUser((data) => {
        this.recommendList = data
        console.log(data)
      })
    }
  },
  created: function () {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/index.css";
</style>
