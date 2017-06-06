$(function() {
	$("#submit").click(function() {
		$.post("signIn.php", {
				userName: $("#userName").val(),
				userPass: $("#userPass").val()
				
			},
			function(data) {
				console.info("post:"+data);
			}

		)
	})
})


function countName(name){
	$.get("checkUser.php", {
			userName: name
			},
		function(data){
			console.info(data);
			if(data>0){
				$("#userNameMsg").html("此用户名已被注册");
			}else{
				panduanArr[5]=true;
			};
		}
	)
}

//$(function(){
//	$("userName").blur(function(){
//		$.get(,function(){
//			
//		})
//	})
//})
//账号验证

var panduanArr=[];
$("#userName").blur(function(){
	var zhanghao=/^1[34578][0-9]{9}$/;
	var zhanghao1=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	
	var userName=$("#userName").val();
		countName(userName);
	if(zhanghao.test(userName)|| zhanghao1.test(userName)){
		
		$("#userNameMsg").html("√");
		panduanArr[0]=true;
	}else{
		$("#userNameMsg").text("账号为网易邮箱/手机号/其他邮箱");
		
	}
})

$("#userPass").blur(function(){
	
	var userPass=$("#userPass").val();
	var mima=/^[0-9a-zA-Z_]{6,16}$/;
	if(mima.test(userPass)){
		$("#userPassMsg").html("√");
		panduanArr[1]=true;
	}else{
		$("#userPassMsg").text("密码为6-16位密码，区分大小写");
	
	}
		
})
$("#userPassAgain").blur(function(){
	
	var userPassAgain=$("#userPassAgain").val();
	var userPass=$("#userPass").val();
	if(userPassAgain==userPass && userPassAgain!=""){
		$("#userPassAgainMsg").html("√");
		panduanArr[2]=true;
	}else{
		$("#userPassAgainMsg").text("密码错误");
	
	}
		
})

$("#btn").click(function(){
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];

		var str='';
		var yanzheng=$("#yanzheng");
		while(str.length<4){
			var iNum=parseInt(Math.random()*100)
			while(iNum>36){
				iNum=parseInt(Math.random()*100)
			}
			str+=arr[iNum];
		}
		$("#btn").css("display","none");
		yanzheng.text(str);
		yanzheng.css({"background":"#99f","text-align":"center"});
	})


$("#pass").blur(function(){
		
	var pass=$("#pass").val();
	var yanzheng=$("#yanzheng").text();
	
	if(pass==yanzheng && pass!="" ){
		$("#passMsg").html("√");
		panduanArr[3]=true;
	}else{
		$("#passMsg").text("验证码错误");
		x=false;
	}
		
})


$("#submit").click(function(){
	
	if($("#checkbox:checked")){
		panduanArr[4]=true;
	}else{
		panduanArr[4]=false;
	}
	
	for(var i=0;i<panduanArr.length;i++){
		if(panduanArr[i]==true ){
			location.href="index.html";
		}else{
			alert("注册失败");
			return
		}
	}
	
})






