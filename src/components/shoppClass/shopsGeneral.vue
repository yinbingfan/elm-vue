<template>
  <!--********商场百货********-->
  <li class="shops general">
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
