<?php
	
	header("Content-type:text/html;charset=utf-8");
	//接收数据
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];
//	$userName="4355666";
//	$userPass="hjjjkjjkj";
	
	$con=mysql_connect("localhost:3306","root","1234567");
	
	if (!$con) {
		echo('连接不成功');
	}else{
		echo('');
	}


	mysql_select_db("youxuan",$con);
	
	$sqlStr="insert into userinfo(userName,userPass) values('".$userName."','".$userPass."')";
	
	mysql_query($sqlStr,$con);

	mysql_close($con);
	
	echo "注册成功！<a href='index.html'>点击进入首页</a>";
?>
//<?php
//	//1、接收客户端的数据
//	$userName = $_POST['userName'];
//	$userPass = $_POST['userPass'];
//	
//	//
//	header("Content-type","text/html;charset=utf-8");
//	
//	//1、建立连接（搭桥）
//	$conn = mysql_connect("localhost:3306","root","qianfeng");
//	
//	//2、选择数据库
//	mysql_select_db("mydb1702",$conn);
//	
//	
//	//3、执行SQL语句
//	$sqlStr ="insert into userInfo(userName,userPass) values('".$userName."','".$userPass."')";
//	mysql_query($sqlStr,$conn);
//	
//	//4、关闭数据库
//	mysql_close($conn);
//	
//	echo "注册成功！<a href='index.html'>进入主页</a>";
//?>