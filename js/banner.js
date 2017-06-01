var x = 0;
var y;
	function img() {
		var imgUrl = [];
		imgUrl[0] = "img/banner.jpg";
		imgUrl[1] = "img/banner1.jpg";
		imgUrl[2] = "img/banner2.jpg";
		imgUrl[3] = "img/banner3.jpg";
		change(x);
		$("#banner1").attr('src', imgUrl[x++]);
		//console.info(imgUrl[x]);
		
		if (x > 3) {
			x = 0;
		}
	}
	function change(liNum){
		var liList=document.getElementsByClassName("banner-li");
		for(var i=0;i<liList.length;i++){
			if(liNum==i){
				liList[i].style.backgroundColor="#d0c4af";
			}else{
				liList[i].style.backgroundColor="#fff";
			}
			
		}
	}
	function kaishi(){
		clearInterval(y);
		img();
		y=setInterval("img()",1000);
	}
	function dingzhu(num){
		clearInterval(y);
		var imgUrl=[];
		imgUrl[0] = "img/banner.jpg";
		imgUrl[1] = "img/banner1.jpg";
		imgUrl[2] = "img/banner2.jpg";
		imgUrl[3] = "img/banner3.jpg";
		var banner1=document.getElementById("banner1");
		banner1.src=imgUrl[num];
		x=num;
		change(x);
	}
	function dingzhu1(){
		clearInterval(y);
		var imgUrl=[];
		imgUrl[0] = "img/banner.jpg";
		imgUrl[1] = "img/banner1.jpg";
		imgUrl[2] = "img/banner2.jpg";
		imgUrl[3] = "img/banner3.jpg";
		var banner1=document.getElementById("banner1");
		banner1.src=imgUrl[x];
		change(x);
	}
	function toLeft(){
		clearInterval(y);
		var imgUrl=[];
		imgUrl[0] = "img/banner.jpg";
		imgUrl[1] = "img/banner1.jpg";
		imgUrl[2] = "img/banner2.jpg";
		imgUrl[3] = "img/banner3.jpg";
		var banner1=document.getElementById("banner1");
		if(x--<=0){
			x=3;
		}
		banner1.src=imgUrl[x];
		change(x);
		
	}
	
	function torRight(){
		clearInterval(y);
		var imgUrl=[];
		imgUrl[0] = "img/banner.jpg";
		imgUrl[1] = "img/banner1.jpg";
		imgUrl[2] = "img/banner2.jpg";
		imgUrl[3] = "img/banner3.jpg";
		var banner1=document.getElementById("banner1");
		if(x++>=3){
			x=0;
		}
		banner1.src=imgUrl[x];
		change(x);
		
		
	}
	