<?php
header("Content-type","text/html;charset=utf-8");
	//接收数据
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];
	
	$con=mysql_connect("localhost:3306","root","1234567");

	mysql_select_db("youxuan",$con);
	
	$sqlStr="select * from userinfo where userName='".$userName."' and userPass='".$userPass."'";
	
	$result =mysql_query($sqlStr,$con);

	$rows = mysql_num_rows($result);
	//4、关闭数据库
	mysql_close($con);
	
	if($rows==0){
		echo "false";
	}else{
		echo "true";
	}
?>