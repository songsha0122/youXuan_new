<?php
	
	header("Content-type","text/html;charset=utf-8");
	//接收数据
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];
	$userTel=$_POST['userTel'];
	
	$con=mysql_connect("localhost","root","1234567");
	
	mysql_select_db("youxuan",$con);
	
	$sqlStr="insert into userInfo(userName,userPass,userTel) values('".$userName.",".$userPass.",".$userTel."') ";

	mysql_query($sqlStr,$con);

	mysql_close($con);
	
	echo"注册成功！<a href='index.html'>进入主页</a>";
?>