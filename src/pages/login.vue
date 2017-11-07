<template>
    <div>
        <loginheader></loginheader>
        <logincontent></logincontent>
        <logincontent2></logincontent2>
        <loginfooter></loginfooter>
    </div>
</template>

<script type="text/ecmascript-6">

  import'../assets/css/login.css'
  import'../assets/js/login.js'
  import loginheader from '../components/login/login-header.vue'
  import logincontent from '../components/login/login-content.vue'
  import logincontent2 from '../components/login/login-content-2.vue'
  import loginfooter from '../components/login/login-footer.vue'
    export default {
        components: {
            loginheader,
            logincontent,
            logincontent2,
            loginfooter,
        }
    }
</script>

<style scoped>

</style>
