var intDiff = parseInt(897);//倒计时总秒数量
function timer(intDiff){
	window.setInterval(function(){
	var 
		minute=0,
		second=0;//时间默认值
	if(intDiff > 0){
		minute = Math.floor(intDiff / 60);
		second = Math.floor(intDiff)-(minute * 60);
	}
	if (minute <= 9) minute = '0' + minute;
	if (second <= 9) second = '0' + second;
	$('#minute_show').html('<s></s>'+minute+'分');
	$('#second_show').html('<s></s>'+second+'秒');
	intDiff--;
	}, 1000);
	
}

$(function(){
	timer(intDiff);
});
$(".thirdpayment-showmore").click(function(){
	$(".hide").toggle();
	$(this).toggle();
})










