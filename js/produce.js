//$(".lunboanniu1").click(function(){
//
//		var n = parseInt($(".new-ul").css("left"));//1215
//		var m = 1240 ;
//		if(n==0){
//			m=0
//		}
//		var num = parseInt(n+m) ;
//		$(".new-ul").animate({
//			left:num,
//		})
//	});
//	$(".lunboanniu2").click(function(){
//		var n = parseInt($(".new-ul").css("left"));//1215
//		var m = 1240 ;
//		if(n==-2480){
//			m=0
//		}
//		var num = parseInt(n-m) ;
//		$(".new-ul").animate({
//			left:num,
//		});
//	});
//	});
$(".newProduct-btn1").click(function(){
	var n=parseInt($(".newProduct-ul").css("marginLeft"));
	var m=1090;
	if(n==0){
		m=0;
	}
	var num=parseInt(n+m);
	$(".newProduct-ul").animate(
		{
			marginLeft:num
		}
	)
})
$(".newProduct-btn2").click(function(){
	var n=parseInt($(".newProduct-ul").css("marginLeft"));
	var m=1090;
	if(n==-2180){
		m=0;
	}
	var num=parseInt(n+m);
	$(".newProduct-ul").animate(
		{
			marginLeft:num
		}
	)
})