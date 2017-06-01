
var recommend=document.getElementById("recommend-b");
var liNum=document.getElementsByClassName("select1");
var divNum=document.getElementsByClassName("select2");
function changeLi(index){
	for(var i=0;i<liNum.length;i++){
		liNum[i].className="";
		divNum[i].className="";
	}
	liNum[index].className="select";
	divNum[index].className="select";
}
for(var i=0;i<liNum.length;i++){
	liNum[i].xunhuan=i;
	liNum[i].onclick=function(){
		changeLi(this.xunhuan);
	}
}
