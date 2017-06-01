
//var recommend=document.getElementById("recommend-b");
var liNum=$("#recommend-b li");
//console.info(liNum.length);
var divNum=$("#recommend-b div");
function changeLi(index){
	for(var i=0;i<liNum.length;i++){
		liNum[i].className="";
		divNum[i].className="";
	}
	liNum[index].className="select";
	divNum[index].className="select";
}
for(var i=0;i<liNum.length;i++){
	console.info(i);
	liNum[i].xunhuan=i;
	liNum[i].onclick=function(){
		console.info(i);
		changeLi(this.xunhuan);
		
	}
}
