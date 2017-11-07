<template>
    <div>
      <div class="content_2" id="content_2">
      <form>
      <section class="form-b6px1">
      <input type="text" name=""  value="" placeholder="手机/邮箱/用户名"/>
      <span id="yhm"></span>
      </section>
      <section class="form-b6px1">
      <input type="password" name="" value="" placeholder="密码" />
      <span id="mima"></span>
      </section>
      <button class="SubmitButton-2wG4T">
      登陆
      </button>
      </form>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import'../../assets/js/jquery-1.8.3.min.js'
  import'../../assets/js/login.js'
  import'../../assets/css/login.css'
//
//    export default {
//        components: {}
//    }
</script>

<style scoped>
  .content{display:block;}
  .MessageLogin-FsPlX{position: relative;margin-top:16px;height:.48rem;font-size: .14rem;background: #fff;}
  .MessageLogin-FsPlX>input{width:2.85rem;height: 100%;padding-left: .1rem;border: 1px solid #ddd;border-radius: .04rem;color: #333;}
  .CountButton-3e-kd{padding: 0;border-radius:0.06rem;background: transparent;text-align: center;font-size:0.14rem;color: #ccc;margin-right: 0.1rem;}
  .MessageLogin-FsPlX>*{display: inline-block;position: absolute;top:50%;right: 10px;transform:translateY(-50%) ;}
  button,input{outline: 0;font-size: inherit;font-family: inherit;}
  .MessageLogin-15xD9{margin-top: .12rem;color: #999;font-size: .14rem;line-height: .2rem;}
  .MessageLogin-15xD9 a{color: #2395FF;}

  /**********登陆按钮**********/
  .SubmitButton-2wG4T{display: block;width: 100%;height: .42rem;margin-top: .3rem;border-radius: .04rem;background: #4cd96f;color: #fff;text-align: center;font-size: .16rem;line-height: .42rem;}

  /*********密码登陆*********/
  .content_2{display:none;}
  .form-b6px1{position: relative;margin-top: .16rem;height: .48rem;font-size: .14rem;background: #fff;}
  .form-b6px1>input{width: 100%;height: 100%;left: 0;padding-left: .1rem;border: 1px solid #ddd;border-radius: .04rem;color:#333;}
  .form-b6px1>*{display: inline-block;position: absolute;top: 0;right: 0.1rem;transform: translateY(-50%);}

</style>
