<template>
  <!--<router-link :to="{ name: 'detail', params:{ goodsList: 1}}">-->
    <ul class="shoppClassList">
      <!--********全部********-->
      <shop-all :shops="cartList"></shop-all>
      <!--大牌特惠-->
      <shop-big :shops="cartList"></shop-big>
      <!--********下午茶********-->
      <shop-teas :shops="cartList"></shop-teas>
      <!--********商场百货********-->
      <shop-general :shops="cartList"></shop-general>
      <!--********水果生鲜********-->
      <shop-fruite :shops="cartList"></shop-fruite>
      <!--********鲜花蛋糕********-->
      <shop-flower :shops="cartList"></shop-flower>
    </ul>
  <!--</router-link>-->
</template>

<script type="text/ecmascript-6">
  import shopAll from './shopsAll.vue'
  import shopBig from './shopsBig.vue'
  import shopTeas from './shopsTeas.vue'
  import shopGeneral from './shopsGeneral.vue'
  import shopFruite from './shopsFruite.vue'
  import shopFlower from './shopsFlower.vue'
  import ShopCartService from '../../fetch/ShopService'
  export default {
    data () {
      return {
        cartList: []
      }
    },
    components: {
      shopAll,
      shopBig,
      shopTeas,
      shopGeneral,
      shopFruite,
      shopFlower
    },
    methods: {
      initData: function () {
        ShopCartService.getShopCartListByUser((data) => {
          this.cartList = data
        })
      }
    },
    created: function () {
      this.initData()
    }
  }
</script>
<style scoped>
  @import '../../assets/css/shoppingclass.css';

</style>
