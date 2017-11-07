<template>
  <div>
  <header>
    <div>
      <i></i>
      <h1>登录</h1>
    </div>
    <h2>密码登录</h2>
  </header>
  <section>
    <form>
      <div class="inpsBox">
        <input class="inpText" type="text" value="13771455987"/>
        <input class="inpBot" type="button" value="获取验证码"/>
      </div>
      <input type="text" class="inpShow"/>
      <p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表你已同意
        <a href="#">
          《用户服务协议》
        </a>
      </p>
      <input type="submit" v-on:click="blurfn" class="inpSbm" value="登录"/>
    </form>
  </section>
  <footer>
    <p><i></i><span>第三方登录</span><i></i></p>
    <div class="footer_Bottom">
      <a href="#">
        <i class="weixin"></i>
        <span>微信</span>
      </a>
      <a href="#">
        <i class="qq"></i>
        <span>QQ</span>
      </a>
      <a href="#">
        <i class="weibo"></i>
        <span>微博</span>
      </a>
      <a href="#">
        <i class="taobao"></i>
        <span>淘宝</span>
      </a>
    </div>
  </footer>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {

    methods:{
      //表单正则验证
      checkAll (type, value) {
        var reg;
        switch (type) {
          case "passWord":
            reg =this.passWordReg();
            break;
          default:
            ;
        }
        if (reg.test(value)) {
          return true;
        } else {
          return false;
        }
      },

      passWordReg () {
        return /^[1-9]\d{5}$/;
      },

      blurfn(){
        var loginPass = $(".inpShow").val();
        if (loginPass == "") {
          alert("请填写验证码");
        } else if(this.checkAll("passWord",loginPass)==false) {
          alert("验证码格式不正确");
        }else if(this.checkAll("passWord",loginPass)==true){
//          alert(1);
          this.$router.push("/ordershow");
        }
      },
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/logoin.css";

</style>
