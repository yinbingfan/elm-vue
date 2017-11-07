<template>
  <div>
    <orders-header></orders-header>
    <orders-section></orders-section>
    <orders-footer></orders-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import ordersHeader from '../components/orders/ordersHeader.vue'
  import ordersSection from '../components/orders/ordersSection.vue'
  import ordersFooter from '../components/index/footer.vue'
  export default {
    components: {
      ordersHeader,
      ordersSection,
      ordersFooter
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

</style>
