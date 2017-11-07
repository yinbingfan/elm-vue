<template>
	<div class="dxq">
			<ul class="list info-list">
				<li>
					<span class="s1">周先生的饭外卖订单</span>
					<span class="s2">详情</span>
					<span class="s3">$&nbsp;30.10</span>
				</li>
			</ul>
			<section class="thirdpayment-container ng-scope">
				<div class="title">
					<span>选择支付方式</span>
				</div>
			</section>
			<ul class="list payment-list third">
				<li class="payment-list-item  selected" id="zfb111">
					<a href="#">
						<div class="icon">
						<img src="images/dimg/支付宝.svg"/>
						</div>
						<div class="payment-list-item-content">
							<p class="content-title ng-binding">支付宝</p>
						</div>
						<i class="icon icon-gou75"></i>
					</a>	
				</li>
				<li class="payment-list-item  selected huabei">
					<a href="#">
						<div class="icon">
						<img src="images/dimg/花.svg"/>
						</div>
						<div class="payment-list-item-content">
							<p class="content-title ng-binding">花呗</p>
						</div>
						<i class="icon icon-gou75"></i>
					</a>
					
				</li>
				<li class="payment-list-item  selected hide">
					<a href="#">
						<div class="icon">
						<img src="images/dimg/侧边栏-qq.svg"/>
						</div>
						<div class="payment-list-item-content">
							<p class="content-title ng-binding">银行卡支付</p>
						</div>
						<i class="icon icon-gou75"></i>
	
					</a>
				</li>
				<li class="payment-list-item  selected hide">
					<a href="#">
						<div class="icon">
						<img src="images/dimg/支付宝.svg"/>
						</div>
						<div class="payment-list-item-content">
							<p class="content-title ng-binding">微信支付</p>
						</div>
						<i class="icon icon-gou75"></i>
					</a>
					
				</li>
				<li class="payment-list-item  selected hide">
					<a href="#">
						<div class="icon">
						<img src="images/dimg/支付宝.svg"/>
						</div>
						<div class="payment-list-item-content">
							<p class="content-title ng-binding">QQ钱包</p>
						</div>
						<i class="icon icon-gou75"></i>
					</a>
					
				</li>
				
				<li class="thirdpayment-showmore ng-scope">
					<a href="#">
						<span class="payment-more">其他支付方式</span>
						<div class="triangle-more">
							<img src="images/dimg/箭头 下.svg"/>
						</div>
					</a>
				</li>
			</ul>
			<div class="btn-submit-wrap clearfix btn-overflow">
				<div class="wrapper">
					<button class="btn btn-primary btn-submit ng-binding">
						确认支付 ¥32.00
					</button>
				</div>
			</div>
		</div>	
		
</template>

<script>
 import'../../assets/css/payment.css'
 import'../../assets/js/js/payment.js'
 import'../../assets/js/js/common.js'
 import'../../assets/js/jquery-1.8.3.min.js'
   export default {
//    data(){
//      img:require('@/assets/images/dimg/logo.png')
//    },
//    components:{
//     longin
//    }
  }
</script>

<style>
</style>