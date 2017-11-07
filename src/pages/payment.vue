<template>
	<div>
		<paymentHeader></paymentHeader>
		<paymentBanner></paymentBanner>
		<paymentDjs></paymentDjs>
		<paymentDxq></paymentDxq>
		
	</div>
</template>

<script>
  import'../assets/css/payment.css'
  import'../assets/js/payment.js'
  import paymentHeader from '../components/payment/paymentHeader.vue'
  import paymentBanner from '../components/payment/paymentBanner.vue'
  import paymentDjs from '../components/payment/paymentDjs.vue'
  import paymentDxq from '../components/payment/paymentDxq.vue'
    export default {
        components: {
            paymentHeader,
            paymentBanner,
            paymentDjs,
            paymentDxq,
        }
    }
	
</script>

<style>
</style>