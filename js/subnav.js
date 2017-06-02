
var navLi=$("nav ul#nav .navLi");
var navDiv=$(".subnav");

function changeNavLi(num){
	for(var i=0;i<navLi.length;i++){
		navLi[i].className="navLi";
		navDiv[i].className="subnav";
	}
	navLi[num].className="navLiSelect";
	navDiv[num].className="subnavSelect";
	var navWidth=$(window).width();
	console.info(navWidth);
	$(navDiv[num]).width(navWidth);

}

function changeSubnavLi(num){
	for(var i=0;i<navLi.length;i++){
		navLi[i].className="navLi";
		navDiv[i].className="subnav";
	}
}

	for(var i=0;i<navLi.length;i++){
		navLi[i].select=i;
		navLi[i].onmouseenter=function(){
			changeNavLi(this.select);
		}
		navDiv[i].onmouseleave=function(){
			changeSubnavLi(this.select);
		}
}

