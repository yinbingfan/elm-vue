<template>
  <div>
    <find-header></find-header>
    <find-disclose></find-disclose>
    <find-banner></find-banner>
    <find-food></find-food>
    <find-day></find-day>
    <find-ever></find-ever>
    <find-footer></find-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import findHeader from '../components/find/findHeader'
  import findFooter from '../components/index/footer.vue'
  import findDisclose from '../components/find/findDisclose'
  import findBanner from '../components/find/findBanner'
  import findFood from '../components/find/findFood'
  import findDay from '../components/find/findDay'
  import findEver from '../components/find/findEver'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/find.js'
  import '../assets/js/homePage'
  export default {
    components: {
      findHeader,
      findBanner,
      findDisclose,
      findFood,
      findDay,
      findEver,
      findFooter
    },
    mounted(){
      $(function () {
        // footer点击变换效果
        $(".footer_list").find(".footer_list_link").eq(0).find(".blueBtn").css("display","block");
        $(".footer_list").find(".footer_list_link").eq(0).find(".grayBtn").css("display","none");
        $(".footer_list li").click(function () {
          $(".footer_list li").find("p").each(function () {
            $(this).removeClass("active");
          });
          $(this).find("p").addClass("active");
          var num = $(this).index();
          $(".footer_list li img").each(function(){
            $(".blueBtn").css("display","none");
            $(".grayBtn").css("display","block");
          });
          $(this).find(".blueBtn").css("display","block");
          $(this).find(".grayBtn").css("display","none");
        });
      });
    }
  }
</script>
<style scoped>
  @import '../assets/css/find.css';
  @import '../assets/css/index.css';
</style>
