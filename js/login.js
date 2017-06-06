$(function(){
	
	$("#btnLogin").click(function(){
		//console. info("btnLogin");
		var userNameVal=$("#userName").val();
		var userPassVal=$("#userPass").val();
//		console.info("userNameVal:"+userNameVal);
//		console.info("userPassVal:"+userPassVal);
		$.post("login.php",{userName:userNameVal,userPass:userPassVal},function(data){
			
			if(data=="true"){
				//登录成功
					console.info($("#checkbox").attr("checked"));
				if($("#checkbox").attr("checked")){
					//存cookie
				setCookie("userName",userNameVal,365);
				setCookie("userPass",userPassVal,365);
				
				}
				
				//跳到主页
			 	location.href="index.html";
			}else{
				//登录失败
				alert("亲，登录失败，用户名或者密码错了");
			}
		});		
	});
	
});



//设置cookie
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}



//函数自调用
(function(){
var userNameVal=getCookie("userName");
var userPassVal=getCookie("userPass");

if(""!=userNameVal){
	$.post("login.php",{
	userName:userNameVal,
	userPass:userPassVal
},
	function(data){
			console. info(data);
			if(data=="true"){
				//登录成功
				//存cookie
				location.href="index.html";
				if($("#checkbox:checked")){
					//存cookie
				setCookie("userName",userNameVal,365);
				setCookie("userPass",userPassVal,365);
				//跳到主页
			 	location.href="index.html";
				}
			 	//<a href='index.html'>点击进入首页</a>"
			}else{
				//登录失败
				//alert("亲，cookie失效");
			}
		});
}
})();




//得到cookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

////检验是否注册过
//function countName(name){
//	$.get("checkUser.php", {
//			userName: name
//			},
//		function(data){
//			console.info(data);
//			if(data>0){
//				panduanArr[2]=true;
//			}else{
//				panduanArr[2]=false;
//				
//			};
//		}
//	)
//}

//账号验证

var panduanArr=[];
$("#userName").blur(function(){
	var zhanghao=/^1[34578][0-9]{9}$/;
	var zhanghao1=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	
	var userName=$("#userName").val();
		
	if(zhanghao.test(userName)|| zhanghao1.test(userName)){
		
		$("#userNameMsg").html("");
		panduanArr[0]=true;
	}else{
		$("#userNameMsg").text("账号格式错误");
		
	}
})



//密码验证
$("#userPass").blur(function(){
	
	var userPass=$("#userPass").val();
	var mima=/^[0-9a-zA-Z_]{6,16}$/;
	if(mima.test(userPass)){
		$("#userPassMsg").html("");
		panduanArr[1]=true;
	}else{
		$("#userPassMsg").text("密码错误");
	
	}
		
})

//登录
$("#submit").click(function(){
	
	
	for(var i=0;i<panduanArr.length;i++){
		if(panduanArr[i]==true ){
			location.href="index.html";
		}else{
			alert("账号或密码错误");
			return
		}
	}
	
})











