<template>
  <!---------------------送达时间选择器----------------------->
  <div class="sendTime_select">
    <div class="sendTime_select_header">选择送达时间</div>
    <div class="sendTime_select_container">
      <div class="Time_tab">
        <span class="week">今日(周五)</span>
      </div>
      <ul class="Time_list">
        <li>
          <span class="time">尽快送达 | 预计18:45</span><span class="sendPrice">(3.5元配送费)</span>
          <span class="selectedBtn" ><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=944859636,1151147120&fm=27&gp=0.jpg" alt=""></span>
        </li>
        <li v-for="(i,x) in list"  :good="x">
          <span class="time">{{i.time1}}</span><span class="sendPrice">{{i.price}}</span>
          <span class="selectedBtn"></span>
        </li>
      </ul>
    </div>
  </div>
  <!---------------------送达时间选择器结束----------------------->
</template>

<script  type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/goodsCartPay.js'
  export default {
    data (){
      return{
        list:[{time1:"19:00",price:"(3.5元配送费)"},{time1:"19:15",price:"(3.5元配送费)"},{time1:"19:30",price:"(3.5元配送费)"},{time1:"19:45",price:"(3.5元配送费)"},{time1:"20:00",price:"(3.5元配送费)"},{time1:"20:15",price:"(3.5元配送费)"},{time1:"20:30",price:"(3.5元配送费)"},{time1:"20:45",price:"(3.5元配送费)"}],
        num:0,
//        src:require('@/assets/images/img_yxz/selected.png'),
//        flag:true
      }
    },
    methods:{
      change(){
        $(".Time_list li").click(function () {
          console.log($(this).index())
          $(".Time_list li").find(".selectedBtn").html("")
          $(this).find(".selectedBtn").html("<img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=944859636,1151147120&fm=27&gp=0.jpg'>")

          $(".timeInfo").text($(this).find(".time").text());
          $(".weekInfo").text($(this).parentsUntil(".Time_tab").find(".week").text());
        })
      }
    },
    mounted(){
      this.change()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/goodsCartPay.css";
</style>
