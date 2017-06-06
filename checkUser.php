<?php
	
	header("Content-type","text/html;charset=utf-8");
	//接收数据
	$userName=$_GET['userName'];
	
	
	$con=mysql_connect("localhost:3306","root","1234567");
	
	if (!$con) {
		echo('连接不成功');
	}else{
		echo('');
	}

	mysql_select_db("youxuan",$con);
	
	$sqlStr="select * from userinfo where userName = '".$userName."'";
	
	$result =mysql_query($sqlStr,$con);

	mysql_close($con);
	
	$resultCount =0;
	
	while($row = mysql_fetch_array($result))
	 {
	 $resultCount++;
	 }
	 echo $resultCount;
?>
