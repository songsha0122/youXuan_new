
//var recommend=document.getElementById("recommend-b");
var liNum=$("#recommend-b li.select1");
//console.info(liNum);
var divNum=$("#recommend-b div.select1");
function changeLi(index){
	for(var i=0;i<liNum.length;i++){
		liNum[i].className="select1";
		divNum[i].className="select1";
	}
	liNum[index].className="select";
	divNum[index].className="select";
}
for(var i=0;i<liNum.length;i++){
	//console.info(i);
	liNum[i].xunhuan=i;
	liNum[i].onclick=function(){
		//console.info(i);
		changeLi(this.xunhuan);
		
	}
}
