
$(function () {
  // var oTop = $(".search_link").offset().top;
  $(window).scroll(function () {
    var wTop = $(this).scrollTop();
    if(wTop>48){
      $(".search_link").addClass("fixed");
    }else{
      $(".search_link").removeClass("fixed");
    }

  });

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

//侧边栏根据scrolltop的出现隐藏
  window.onscroll=function(){
    var sTop=document.body.scrollTop || document.documentElement.scrollTop;
    if(sTop<300){
      $(".backTop").css("opacity",0);
    }else{
      $(".backTop").css("opacity",1);
    }

  }
//页面回到顶部
  $(".backTop").click(function(){
    // var scrollTop = $(window).scrollTop();
    // $("body").animate(
    //     {
    //         scrollTop:0
    //     }
    //     ,400)
    $(window).scrollTop(0);

  });
});



