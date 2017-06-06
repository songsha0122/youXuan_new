(function(){
	var thisURL = document.URL;
	var getval = thisURL.split("?")[1];
	var getId ;			
	
	if(getval){
		getId = getval.split("=")[1];
	}else{
		getId="01";
	}

	console.info(getId);
			$.get("goodsAndShoppingCart/getGoodsInfo.php",{"goodsId":getId},function(data){
				
				var jsonData =jQuery.parseJSON(data.replace(/\'/g,"\""));
				console.info(jsonData);
				var topDiv = $("<div></div>").html("<a href=\"#\">首页</a><span>&gt</span><a href=\"#\">居家</a><span>&gt</span><a href=\"#\">夏凉</a><span>&gt</span><b>"+jsonData.goodsName+"</b>");
				topDiv.attr("class","show-top");
				$("#show").append(topDiv);
				var bottomDiv = $("<div></div>").html("<div class=\"show-left\"> <div class=\"bigBox\"> <img src=\""+jsonData.goodsImg+"\" class=\"showBigImg\"  />"+
				"<img src=\"img/detail2.jpg\" /> <img src=\"img/detail3.jpg\" /> <img src=\"img/detail4.jpg\" /> <img src=\"img/detail5.jpg\" />  </div>"+
				" <ul class=\"bigUl\"> <li><img src=\"img/detail6.png\"/></li> <li><img src=\"img/detail6.png\"/></li> <li><img src=\"img/detail7.png\"/></li> "+
				"<li><img src=\"img/detail7.png\"/></li> </ul> <div class=\"smallBox\"> <ul> <li  class=\"showSmallImg\"><img src=\"img/detail1-1.png\"/></li> "+
				"<li><img src=\"img/detail2-2.jpg\"/></li> <li><img src=\"img/detail3-3.jpg\"/></li> <li><img src=\"img/detail4-4.jpg\"/></li>"+
				" <li><img src=\"img/detail5-5.jpg\"/></li> </ul> </div> </div> <div class=\"show-right\"> <h3>"+jsonData.goodsName+"</h3>"+
				" <s>"+jsonData.goodsDesc+"</s> <div class=\"price clear\"> <ul> <li> <i>售价</i> <span>￥169.00</span> </li> <li>"+
				" <i>促销</i> <a href=\"#\"  class=\"aTe\">毕业季</a> <a href=\"#\">8款特价组合折上折，先领全场优惠券</a> </li> <li> <i>服务</i>  "+
				"<a href=\"#\">.30天无忧退货. 48小时快速退款 .满88元免邮费. 网易自营品牌</a> </li> </ul> </div> <div class=\"select clear\"> <s>规格颜色</s>"+
				" <ul class=\"smallUl\"> <li class=\"showSmallLi\"><img src=\"img/detail6-6.png\" /></li> <li><img src=\"img/detail6-6.png\"/></li>"+
				" <li><img src=\"img/detail7-7.png\"/></li> <li><img src=\"img/detail7-7.png\"/></li> </ul> </div>  <div class=\"num\"> <s>数量</s> "+
				"<input type=\"button\" id=\"cut\"  value=\"-\"/> <input type=\"text\" id=\"txt\"/> <input type=\"button\" id=\"add\"  value=\"+\"/> </div> "+
				" <div class=\"jiesuan\"> <input type=\"submit\" id=\"buy\" value=\"立即购买\" /> <input type=\"submit\" id=\"increase\" value=\"加入购物车\" />"+
				" <span id=\"shoucang\"> 收藏</span> </div>  </div>");
				bottomDiv.attr("class","show-bottom");
				$("#show").append(bottomDiv);
				giveEvent();
//				var goodsInfo = eval("("+data+")");				
//					var strLi ="<img src='"+goodsInfo.goodsImg+"'/>";
//					$(".goods").append(strLi);
//					$('.bigPic').append(strLi);
//					$('.pic').append(strLi);									
			});
})();

function giveEvent(){
	var spanShow = $("#introduce .left .title2 span");
//console.info(liNum);
var divShow = $("#introduce .left div");

function changeSpan(index) {
	for(var i = 0; i < spanShow.length; i++) {
		spanShow[i].className = "hide";
		divShow[i].className = "hide";
		$(spanShow[i]).css({
			border: "1px solid #EAEAEA",
			background: "#f5f5f5"
		});
	}

	spanShow[index].className = "showSelect";

	$(spanShow[index]).css({
		borderTop: "2px solid #b4a078",
		background: "#fff"
	});

	divShow[index].className = "showSelect";
}
for(var i = 0; i < spanShow.length; i++) {
	//console.info(i);
	spanShow[i].xunhuan = i;
	spanShow[i].onclick = function() {
		//console.info(i);
		changeSpan(this.xunhuan);

	}
}

var showSmallImg = $("#show .show-bottom .show-left .smallBox li");
var showBigImg = $("#show .show-bottom .show-left .bigBox img");

//console.info(showSmallImg.length,showBigImg.length);

function selectLi(imgIndex) {
	for(var i = 0; i < showSmallImg.length; i++) {
		showSmallImg[i].className = "";
		showBigImg[i].className = "";
	}
	showSmallImg[imgIndex].className = "showSmallImg";
	showBigImg[imgIndex].className = "showBigImg";
	$("#show .show-bottom .show-left .bigBox").css("display", "block");
	$("#show .show-bottom .show-left .bigUl").css("display", "none");
}

for(var i = 0; i < showSmallImg.length; i++) {
	$("#show .show-bottom .show-left .bigBox").css("z-index", 99);
	showSmallImg[i].xuanzhong = i;
	showSmallImg[i].onmouseover = function() {
		clearBorder();
		selectLi(this.xuanzhong);
	}
}

var showBigLi = $("#show .show-bottom .show-left .bigUl li img");
var showSmallLi = $("#show .show-bottom .show-right .smallUl li");

//console.info(showSmallImg.length,showBigImg.length);

function selectLi2(imgIndex) {
	for(var i = 0; i < showSmallLi.length; i++) {
		showSmallLi[i].className = "";
		showBigLi[i].className = "";
		//$("#show .show-bottom .show-left .bigUl").siblings("div img").hide();
	}
	showSmallLi[imgIndex].className = "showSmallLi";
	showBigLi[imgIndex].className = "showBigImg";

	//$("#show .show-bottom .show-left .bigUl").siblings(".bigBox img").hide();
	$("#show .show-bottom .show-left .bigBox").css("display", "none");
	$("#show .show-bottom .show-left .bigUl").css("display", "block");
	console.info(showSmallLi[imgIndex]) //.css("border","2px solid #f99 ");

}

for(var i = 0; i < showSmallLi.length; i++) {
	console.info(showSmallLi[i]);
	clearBorder();
	showSmallLi[i].xuanze = i;
	showSmallLi[i].onclick = function() {
		console.info(i);
		selectLi2(this.xuanze);
	}
}

function clearBorder() {
	for(var i = 0; i < showSmallLi.length; i++) {
		showSmallLi[i].className = "";
	}
}

}
//look的

