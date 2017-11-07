$(".tabs h2").click(function(){
    $(".shoppingContant").animate({left: '-100%'}, "300");
    $(this).css({
        color:"#00a2f7",
        borderBottom: "0.02rem solid #00a2f7"
    })
    $(this).siblings().css({
        color:" #4e4e4e",
        borderBottom: "0"
    })
})
$(".tabs h1").click(function(){
    $(".shoppingContant").animate({left: '0'}, "300");
    $(this).css({
        color:"#00a2f7",
        borderBottom: "0.02rem solid #00a2f7"
    })
    $(this).siblings().css({
        color:" #4e4e4e",
        borderBottom: "0"
    })
})
$(".uls li").click(function(){
    $(this).css({
        backgroundColor: "#fff",
        color:" #1c1c1c",
        fontWeight:"700"
    })
    $(this).siblings().css({
        backgroundColor: "#f8f8f8",
        color:" #5b5b5b",
        fontWeight:"100"
    })
})
$(window).scroll( function() {
    var scolltop=$(document).scrollTop();
    if(scolltop>10){
        $(".logo").hide(500);
        $(".logo_bottom").hide(500);

        $(".header_logo").css({
            position:"absolute",
            top:"0.22rem",
            left:"0.45rem"
        },500);
        $(".dq").css({
            fontSize:"0.16rem"
        },500);
        $(".i_you").hide(500);
    }else {

        $(".logo").show(500);
        $(".logo_bottom").show(500);
        $(".header_logo").css({
            position: "static"
        },500);
        $(".dq").css({
            fontSize:"0.2rem"
        },500);
        $(".i_you").show(500);
    }
});
//单个商品；
$(".img_show").click(function(){
    $(".onlyshopBox").css({
        display:"block"
    },300)
})
$(".kong").click(function(){
    $(".onlyshopBox").css({
        display:"none"
    },300)
})
$(".i_car").click(function(){
    $(".top_01").toggle(300);
    console.log("100")
})
$(".elmBut").click(function(){
    $(".top_01").toggle(300);
})
//加减货品
// var num1=1;
// $(".jiaBut").click(function(){
//     num1++;
//    $(".shuzi").html(num1);
// })
$(".jiaBut").click(function(){
    let num=Number($(this).prev().html());
    let sub=Number($(this).parent().prev().find("span").html());
    let num1=Number( $(".sp_02").html());
    let num2=Number($(".sp_03").html());
    let str1=$(this).parent().parent().parent().find("h1").html();
    num++;
    num2++;
    let moys=sub*num;
    let moy1=num1+moys/num;
    $(this).prev().html(num);
    $(".sp_02").html(moy1);
    $(".sp_03").html(num2);
    $(".p_02").after(" <div class=\"form_one\">\n" +
        "                    <h2 class=\"h2_01\">（猛料大杯）经典奥利奥</h2>\n" +
        "                    <h3><i>￥</i><span>60</span></h3>\n" +
        "                    <div class=\"inps_02\">\n" +
        "                        <input class=\"jian_01\" type=\"button\" value=\"-\"/>\n" +
        "                        <input class=\"shuliang_01\" type=\"text\" value=\"1\"/>\n" +
        "                        <input class=\"jia_01\" type=\"button\" value=\"+\">\n" +
        "                    </div>\n" +
        "                </div>");
    $(".h2_01").html(str1);

})
$(".jianBut").click(function(){
    let num=Number($(this).next().html());
    let sub=Number($(this).parent().prev().find("span").html());
    let moys=sub*num;
    let num2=Number($(".sp_03").html());
    let num1=Number( $(".sp_02").html());
    let moy1=num1-moys/num;
    if(num>0){
    num--;
    num2--;
    $(this).next().html(num);
    $(".sp_03").html(num2);
    $(".sp_02").html(moy1);
    }
    // $(".sp_03").html(num2);
    // $(".sp_02").html(moy1);
})
$(".p_02 span:last-child").click(function(){
    $(".form_one").remove();
    $(".sp_03").html("0");
    $(".sp_02").html("0");
    $(".shuzi").html("0");
    $(".top_01").hide(300);
})
//评价区
$(".pj_uls li").click(function(){
    $(this).css({
        background: "#1d94fc",
        color:"#fff"
    });
    $(this).siblings().css({
        background: "#eaf4fd",
        color:"#5f6a70"
    })
})
$(".pj_i_1").click(function(){
    $(".pj_section_1").css("display","block");
    $(".pj_section_2").css("display","none");
    $(".pj_section_3").css("display","none");
    $(".pj_section_4").css("display","none");
})
$(".pj_i_2").click(function(){
    $(".pj_section_2").css("display","block");
    $(".pj_section_1").css("display","none");
    $(".pj_section_3").css("display","none");
    $(".pj_section_4").css("display","none");
})
$(".pj_i_3").click(function(){
    $(".pj_section_3").css("display","block");
    $(".pj_section_1").css("display","none");
    $(".pj_section_2").css("display","none");
    $(".pj_section_4").css("display","none");
})
$(".pj_i_4").click(function(){
    $(".pj_section_4").css("display","block");
    $(".pj_section_1").css("display","none");
    $(".pj_section_3").css("display","none");
    $(".pj_section_2").css("display","none");
})

// $(".look i").click(function(){
//     $(this).css({
//
//     })
// })