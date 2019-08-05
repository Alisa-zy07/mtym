<?php
	header("Content-type:text/html;charset=utf-8");

	$userpass  = $_POST['userpass'];
	$userphone = $_POST['userphone'];

	$conn=mysql_connect('localhost','root','root');

	if(!$conn){
		die('连接失败');
	}
	mysql_select_db('mydb195020',$conn);

	$sqlstr="insert into mtzc values('$userphone','$userpass')";
	$result=mysql_query($sqlstr);
	mysql_query($sqlstr,$conn);

	mysql_close($conn);

	$rows=mysql_num_rows($result);
	if($result==1){
		echo "注册失败，输入的手机号已注册";
	}else{
		echo "已成功注册";
	}

?>