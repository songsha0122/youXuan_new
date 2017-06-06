//function createRow(){
//	var title=$("<div></div>"); 
//	title.attr("class","title");
//	var h3=$("<h3></h3>");
//	h3.attr("id","beizi");
//	var img=$("<img/>");
//	img.attr("src","img/jujia(1).png");
//	h3.append(img,"被子");
//	var span=$("<span></span>");
//	span.html("夏凉床品，舒适一夏");
//	title.append(h3,span);
//	
//	$("#list").append(title);
////	<div id	="title">
////		<h3 id="beizi"><img src="img/jujia(1).png"/>被子</h3>
////		<span>夏凉床品，舒适一夏</span>
////	</div>
//}
//createRow();
//
//createCeil();
//function createCeil(){
//	var ul=$("<ul></ul>");
//	for(var j=0;j<4;j++){
//		var li=$("<li></li>");
//		var a=$("<a href='#'></a>");
//		var img=$("<img/>")
//		img.attr("src","img/list1.png");
//		a.append(img);
//		var s=$("<s></s>");
//		s.html("夏凉被");
//		var i=$("<i></i>");
//		i.html("￥199.00");
//		var b=$("<b></b>");
//		b.html("100%棉填充，透气排汗，双面可用");
//		li.append(a,s,i,b);	
//		ul.append(li);
//		$("#list").append(ul);
//	}
//	
//	
//}


function createRow(h3Id,goodsType,imgUrl,des,ulId){
	var title=$("<div></div>"); 
	title.attr("class","title");
	var h3=$("<h3></h3>");
	h3.attr("id",h3Id);
	var img=$("<img/>");
	img.attr("src",imgUrl);
	h3.append(img,goodsType);
	var span=$("<span></span>");
	span.html(des);
	title.append(h3,span);
	var ul=$("<ul></ul>");
	ul.attr("id",ulId);
	$("#list").append(title,ul);
}
createRow("beizi","被子","img/jujia(1).png","夏凉床品，舒适一夏","beiziUL");
//<a href='shangpinxiangqing.html?goodsId="+goodsInfo.goodsId+"'>	
//<a href='shangpinxiangqing.html?goodsId="+strobjarr[i].goodsId+"'>
function createCeil(goodsInfo,ulId){
//	var ul=$("<ul></ul>");
//	for(var j=0;j<4;j++){
		var li=$("<li></li>");
		var a=$("<a href='detail.html?goodsId="+goodsInfo.goodsId+"'></a>");
		a.attr("id",goodsInfo.goodsId);
		var img=$("<img/>")
		img.attr("src",goodsInfo.goodsImg);
		a.append(img);
		var s=$("<s></s>");
		s.html(goodsInfo.goodsName);
		var i=$("<i></i>");
		i.html(goodsInfo.goodsPrice);
		var b=$("<b></b>");
		b.html(goodsInfo.goodsDesc);
		li.append(a,s,i,b);	
		$("#"+ulId).append(li);
//		$("#list").append(ul);
//	}
	
	
}






//	<ul >
//		<li>
//			<a href="#"><img src="img/list1.png"/></a>
//			<s>夏凉被</s>
//			<i>￥199.00</i>
//			<b>100%棉填充，透气排汗，双面可用</b>
//		</li>	
//		<li>
//			<a href="#"><img src="img/list2.png"/></a>
//			<s>夏凉被</s>
//			<i>￥199.00</i>
//			<b>100%棉填充，透气排汗，双面可用</b>
//		</li>	
//		<li>
//			<a href="#"><img src="img/list3.png"/></a>
//			<s>夏凉被</s>
//			<i>￥199.00</i>
//			<b>100%棉填充，透气排汗，双面可用</b>
//		</li>	
//		<li>
//			<a href="#"><img src="img/list4.png"/></a>
//			<s>夏凉被</s>
//			<i>￥199.00</i>
//			<b>100%棉填充，透气排汗，双面可用</b>
//		</li>	
//	</ul>

