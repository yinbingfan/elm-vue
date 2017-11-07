<template>
  <!--********下午茶********-->
  <li class="shops teas">
    <find-lis :item="n" v-for="n in shops">{{n}}</find-lis>
  </li>
</template>

<script type="text/ecmascript-6">
  import findLis from './footLis.vue'
  export default {
      props: ['shops'],
      components: {
          findLis
      },
      data () {
          return {
          }
      }
  }
</script>
<style scoped>
  @import '../../assets/css/shoppingclass.css';

</style>
